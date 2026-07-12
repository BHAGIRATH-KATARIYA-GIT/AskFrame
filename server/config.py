import os
from dotenv import load_dotenv

load_dotenv()

HUGGINGFACEHUB_API_TOKEN = os.getenv("HUGGINGFACEHUB_API_TOKEN")
HF_REPO_ID = os.getenv("HF_REPO_ID")
COLLECTION_NAME = os.getenv("COLLECTION_NAME")
DATABASE_PATH = os.getenv("DATABASE_PATH")
MODEL_NAME = os.getenv("MODEL_NAME")

CHUNK_SIZE = int(os.getenv("CHUNK_SIZE"))
CHUNK_OVERLAP = int(os.getenv("CHUNK_OVERLAP"))