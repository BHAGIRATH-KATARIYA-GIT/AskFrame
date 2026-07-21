import uuid
import chromadb
from config import COLLECTION_NAME, CHROMA_DB_API_KEY, CHROMA_DB_TENANT, CHROMA_DB_NAME
from langchain_chroma import Chroma
from services.embedding_service import get_embedding
from langchain_core.documents import Document


def get_vector_store():
    if not COLLECTION_NAME:
        raise ValueError("collection name not found")
    
    try:
        embeddings = get_embedding()

        client = chromadb.CloudClient(
            tenant=CHROMA_DB_TENANT, database=CHROMA_DB_NAME, api_key=CHROMA_DB_API_KEY
        )

        vector_store = Chroma(
            client=client,
            collection_name=COLLECTION_NAME,
            embedding_function=embeddings,
        )

        return vector_store
    except Exception as e:
        raise ValueError("get_vector_store ERROR: ", str(e))


def transcript_exist(video_url):
    vector_store = get_vector_store()
    result = vector_store.get(
        where={"video_url": video_url},
        include=["metadatas"],
    )

    # print("Length of existing tarnscript", len(result["ids"]) > 0)
    return len(result["ids"]) > 0
 

def index_documents(chunks_docs, video_url):

    try:
        vector_store = get_vector_store()

        if transcript_exist(video_url):
            print("Transcript Alredy Exist")
            return 

        uuids = [str(uuid.uuid4()) for _ in chunks_docs]

        documents = [
            Document(
                page_content=chunk.page_content,
                metadata={
                    "video_url": video_url,
                    "chunk_index": index,
                    "type": "youtube_transcript",
                },
            )
            for index, chunk in enumerate(chunks_docs)
        ]

        print("Documents Added")
        vector_store.add_documents(documents=documents, ids=uuids)
    except Exception as e:
        print(str(e))
        raise ValueError("Store Data In Vector Error: ", str(e))
