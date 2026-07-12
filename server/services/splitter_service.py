from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_core.documents import Document
from config import CHUNK_OVERLAP, CHUNK_SIZE



def get_chunks(docs):
    try:
        if not CHUNK_OVERLAP or not CHUNK_SIZE:
            raise ValueError("Chunks size not found")
        
        splitter = RecursiveCharacterTextSplitter(chunk_size=CHUNK_SIZE, chunk_overlap=CHUNK_OVERLAP)
        chunks_docs = splitter.split_documents(docs)

        return chunks_docs
    except Exception as e:
        print("spliting Error: ", str(e))
        exit()