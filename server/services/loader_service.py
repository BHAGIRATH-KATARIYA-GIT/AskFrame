
from langchain_community.document_loaders import (
    YoutubeLoader
)


def load_documents(video_id):

    try:
        loader = YoutubeLoader(video_id=video_id, language="en")
        
        docs = loader.load()
        return docs[0].page_content

    except Exception as e:
        print("fetch data from Youtube Error: ", str(e))
        raise ValueError(f"fetch data from Youtube Error: {str(e)}")
