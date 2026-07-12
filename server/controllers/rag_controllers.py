from services.llm_service import get_response
from services.splitter_service import get_chunks
from services.loader_service import load_documents
from services.retrieval_service import retrieve_text
from services.vector_service import index_documents
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


