import uuid
from config import COLLECTION_NAME
from langchain_chroma import Chroma
from services.embedding_service import get_embedding


def get_vector_store():
    if not  COLLECTION_NAME :
        raise ValueError("collection name not found")
    
    embeddings = get_embedding()
    
    vector_store = Chroma(
        collection_name=COLLECTION_NAME,
        embedding_function=embeddings,
        persist_directory="./app/data/chroma_db",
    )
    
    return  vector_store
        
def index_documents(chunks_docs):
    
    try:
        vector_store = get_vector_store()
        
        # existing_data = vector_store.get(limit=1)
        
        # if existing_data["ids"]:
        #     print("Existing vector database found. Skipping indexing.")
        #     return
        
        uuids = [str(uuid.uuid4()) for _ in chunks_docs]
        
        vector_store.add_documents(documents=chunks_docs, ids=uuids)
    except Exception as e:
        print(str(e))
        raise ValueError("Store Data In Vector Error: ", str(e))