from services.vector_service import get_vector_store

def retrieve_text(user_query):
    try:
        vector_store = get_vector_store()
        retriver = vector_store.as_retriever(
            search_type="mmr", search_kwargs={"k": 5}
        )
        
        retrived_documents = retriver.invoke(user_query)
        
        texts = " ".join(docs.page_content for docs in retrived_documents)
        return texts
        
    except Exception as e:
        print("retriver relevent data Error: ", str(e))
        exit()