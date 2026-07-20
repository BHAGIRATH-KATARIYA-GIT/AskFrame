from torch import Value

from services.llm_service import get_llm_model, get_response
from services.splitter_service import get_chunks
from services.loader_service import load_documents
from services.retrieval_service import retrieve_text
from services.vector_service import index_documents, transcript_exist
from langchain_classic.prompts import PromptTemplate
from langchain_classic.schema import StrOutputParser
from langchain_core.output_parsers import PydanticOutputParser
from langchain_core.documents import Document
from pydantic import BaseModel, Field
from config import HUGGINGFACEHUB_API_TOKEN


def store_transcript(transcript, video_url):
    try:
        
        if transcript_exist(video_url):
            print("Transcript Alredy Exist")
            return 
        
        docs = Document(
            page_content=transcript,
            metadata={
                "video_url": video_url,
                "type": "youtube_transcript",
            },
        )
        
        # split it
        chunks_docs = get_chunks(docs=[docs])

        # create a vector store
        index_documents(chunks_docs, video_url=video_url)
    except Exception as e:
        print("STORE TRANSCRIPT ERROR: ", str(e))
        ValueError("STORE TRANSCRIPT ERROR: ", str(e))


def ask_question(user_query: str, video_url: str, transcript: str = "qHFcqL11LeQ"):

    try:
        if not HUGGINGFACEHUB_API_TOKEN:
            raise ValueError("HUGGINGFACEHUB_API_TOKEN is missing.")

        store_transcript(transcript=transcript, video_url=video_url)

        # retrive relevent data based on user query
        retrived_text = retrieve_text(user_query)

        # send context + query to llm
        llm_resonse = get_response(user_query=user_query, context=retrived_text)

        # print("AI: ", llm_resonse)
        return llm_resonse
    except Exception as e:
        print("ask question Error: ", str(e))
        raise ValueError("ask question Error: ", str(e))


def transcript_generator(transcript):
    try:

        class TranscriptEntry(BaseModel):
            time: str = Field(description="Estimated timestamp in MM:SS format")
            text: str = Field(
                description="Exact transcript text without changing any original word"
            )

        class TranscriptOutput(BaseModel):
            entries: list[TranscriptEntry] = Field(
                description="Chronologically ordered transcript segments"
            )

        model = get_llm_model()
        parser = PydanticOutputParser(pydantic_object=TranscriptOutput)

        prompt_template_transcript = PromptTemplate(
            template="""
            You are a transcript formatting assistant.

Format the provided raw transcript without changing its original spoken
content.

Rules:
1. Every entry must contain both "time" and "text".
2. Never produce an entry containing only a timestamp.
3. If no transcript text is available for a timestamp, omit that entry.
4. Never return an empty "text" value.
5. Do not add, remove, rewrite, correct, summarize, translate, or paraphrase
   any transcript word.
6. Preserve every original word and its original order.
7. Do not correct grammar, spelling, names, or technical terms.
8. Only divide the transcript into readable segments.
9. Add one timestamp before each segment.
10. Preserve original timestamps when available.
11. Otherwise, estimate timestamps beginning from "00:00".
12. Timestamps must use MM:SS format.
13. Return only the structure requested in the output instructions.

Transcript:
{transcript}

Output instructions:
{format_instructions}


""",
            input_variables=["transcript"],
            partial_variables={"format_instructions": parser.get_format_instructions()},
        )

        chain = prompt_template_transcript | model | parser

        response = chain.invoke({"transcript": transcript})
        # print("server response: ", response)
        return response.entries

    except Exception as e:
        print("llm get response error: ", str(e))
        raise ValueError("llm get response error: ", str(e))
