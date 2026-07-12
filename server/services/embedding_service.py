from langchain_huggingface import HuggingFaceEmbeddings
from config import MODEL_NAME



def get_embedding():
    try:
        if not MODEL_NAME:
            raise ValueError("MODEL NAME is not found In embedding service")
        
        embeddings = HuggingFaceEmbeddings(
            model_name=MODEL_NAME,
            model_kwargs={"device": "cpu"},
            encode_kwargs={"normalize_embeddings": True},
        )
        
        return embeddings
    except Exception as e:
        print("Embedding Model Creation Error: ", str(e))
        return None