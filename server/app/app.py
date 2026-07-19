from fastapi import FastAPI
from urllib.parse import urlparse, parse_qs
from controllers.rag_controllers import ask_question, transcript_generator
from services.loader_service import load_documents

app = FastAPI()



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



@app.post("/get-transcript")
def get_transcript(video_url):
    transcript = load_documents(video_id=video_url)
    print("Transcript: ", transcript)
    response = transcript_generator(video_id=video_url, transcript=transcript)

    return {"status": 200, "response": response}


