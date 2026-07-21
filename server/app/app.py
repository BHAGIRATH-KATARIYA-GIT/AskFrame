from fastapi import FastAPI, HTTPException
from urllib.parse import urlparse, parse_qs

from openai import BaseModel
from pydantic import Field
from controllers.rag_controllers import ask_question, store_transcript, transcript_generator
from services.vector_service import index_documents
from services.loader_service import load_documents
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def extract_video_id(url: str) -> str:
    if not url or not isinstance(url, str):
        raise ValueError("YouTube URL is required")

    url = url.strip()
    parsed_url = urlparse(url)

    hostname = parsed_url.hostname or ""

    if hostname in {"youtu.be", "www.youtu.be"}:
        video_id = parsed_url.path.lstrip("/").split("/")[0]

    elif hostname in {
        "youtube.com",
        "www.youtube.com",
        "m.youtube.com",
        "music.youtube.com",
    }:
        if parsed_url.path == "/watch":
            video_id = parse_qs(parsed_url.query).get("v", [None])[0]

        elif parsed_url.path.startswith(("/shorts/", "/embed/", "/live/")):
            video_id = parsed_url.path.split("/")[2]

        else:
            video_id = None

    else:
        video_id = None

    if not video_id or len(video_id) != 11:
        raise ValueError(f"Invalid YouTube URL: {url}")

    return video_id


@app.get("/")
def root():
    return {"message": "app is running"}


@app.post("/get-video-id")
def get_video_id(video_url):
    video_id = extract_video_id(video_url)
    return {"status": 200, "response": video_id}


@app.post("/upload-url")
def upload_url(video_url, prompt):
    # video_id = extract_video_id(url=video_url)
    response = ask_question(video_id=video_url, user_query=prompt)
    return {"status": 200, "response": response}


class TrasnscriptRequest(BaseModel):
    video_url: str


@app.post("/get-transcript")
def get_transcript(request: TrasnscriptRequest):
    try:
        video_url = request.video_url

        video_id = extract_video_id(url=video_url)
        transcript_text = load_documents(video_id=video_id)
        store_transcript(transcript=transcript_text, video_url=video_url)
        response = transcript_generator(transcript=transcript_text)

        return {"status": 200, "response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


class TranscriptEntry(BaseModel):
    time: str = Field(description="Estimated timestamp in MM:SS format")
    text: str = Field(
        description="Exact transcript text without changing any original word"
    )


class AskQuestionRequest(BaseModel):
    user_query: str
    video_url: str
    transcript: list[TranscriptEntry]


@app.post("/ask-question")
def get_answer(request: AskQuestionRequest):
    video_url = request.video_url
    user_query = request.user_query
    transcript = request.transcript

    video_id = extract_video_id(url=video_url)
    response = ask_question(user_query=user_query, video_url=video_url, transcript=transcript)

    return {"status": 200, "response": response}
