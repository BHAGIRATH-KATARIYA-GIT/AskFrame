from services.llm_service import get_llm_model, get_response
from services.splitter_service import get_chunks
from services.loader_service import load_documents
from services.retrieval_service import retrieve_text
from services.vector_service import index_documents
from langchain_classic.prompts import PromptTemplate
from langchain_classic.schema import StrOutputParser
from langchain_core.output_parsers import PydanticOutputParser
from pydantic import BaseModel, Field
from config import HUGGINGFACEHUB_API_TOKEN


def ask_question(user_query: str, video_id: str = "qHFcqL11LeQ"):

    try:
        if not video_id or not user_query:
            raise ValueError("Input Is Invalid")

        if not HUGGINGFACEHUB_API_TOKEN:
            raise ValueError("HUGGINGFACEHUB_API_TOKEN is missing.")

        # fetch data from internet
        docs = load_documents(video_id=video_id)

        # split it
        chunks_docs = get_chunks(docs=docs)

        # create a vector store
        index_documents(chunks_docs)

        # retrive relevent data based on user query
        # user_query = input("User: ")
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
            time: str = Field(
                description="Estimated timestamp in MM:SS format"
            )
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

I will provide a raw transcript. Your task is to improve only its formatting and readability without changing the original spoken content.

Rules:

1. Do not add, remove, rewrite, correct, summarize, translate, or paraphrase any word from the transcript.
2. Preserve every original word exactly as provided.
3. Do not correct grammar, spelling, punctuation, names, or technical terms.
4. Only improve formatting using paragraphs, line breaks, spacing, and speaker separation when speakers are clearly identifiable.
5. Preserve the original order of all content.
6. Do not add headings, explanations, notes, comments, or conclusions unless they already exist in the transcript.
7. Do not use outside knowledge.
8. Add a timestamp before each paragraph or transcript segment.
9. When the original transcript contains timestamps, preserve and use them exactly.
10. When the original transcript does not contain timestamps, generate estimated timestamps in chronological order, starting from `00:00`.
11. Estimated timestamps must use the format `MM:SS`.
12. Increase timestamps naturally based on the approximate length of each transcript segment.
13. Timestamps are formatting metadata and must not replace, modify, or affect any original transcript word.
14. Do not claim that estimated timestamps are exact.
15. Return only the timestamped and formatted transcript.

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
