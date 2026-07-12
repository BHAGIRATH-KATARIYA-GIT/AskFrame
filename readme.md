# AskFrame

> Chat with any YouTube video 

AskFrame is an AI-powered YouTube assistant that accepts a YouTube video URL, extracts the available transcript, and allows users to ask questions about that specific video through a chat interface.

The application uses retrieval-augmented generation to find relevant transcript sections and generate answers grounded in the video content. Future versions can also support authorized audio and video downloads.

## Features

- Accept a YouTube video URL
- Extract the available transcript
- Display the transcript to the user
- Ask questions about a specific video
- Generate context-based AI answers
- Responsive chat interface
- Loading and error handling
- Planned audio and video download support

---

## Tech Stack

### Frontend

- React
- Tailwind CSS
- React Router
- Axios or Fetch API
- Vite

### Backend

- FastAPI
- Python
- LangChain
- Hugging Face
- YouTube Transcript API
- ChromaDB
- Uvicorn
- python-dotenv

---


```

The user submits a YouTube URL. The backend extracts the video ID and fetches the transcript. LangChain then splits the transcript into chunks, generates embeddings, and stores them in a vector database.

When the user asks a question, the backend searches for the most relevant transcript chunks. Those chunks are passed to the language model together with the user's question, and the generated answer is returned to the frontend.

---

## Project Structure

```text
AskFrame/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── app/
│   │   │   └── store.js
│   │   ├── components/
│   │   ├── features/
│   │   │   ├── chat/
│   │   │   └── transcript/
│   │   ├── pages/
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── controllers/
│   │   ├── __init__.py
│   │   └── rag_controllers.py
│   ├── services/
│   │   ├── __init__.py
│   │   ├── loader_service.py
│   │   ├── splitter_service.py
│   │   ├── vector_service.py
│   │   ├── retrieval_service.py
│   │   └── llm_service.py
│   ├── config.py
│   ├── main.py
│   ├── requirements.txt
│   └── .env
│
├── .gitignore
├── LICENSE
└── README.md
```

---

## Installation

### Prerequisites

Install the following before running the project:

- Node.js 18 or later
- Python 3.10 or later
- Git
- Hugging Face access token

### Clone the Repository

```bash
git clone https://github.com/your-username/askframe.git
cd askframe
```

---

## Backend Setup

Move into the backend folder:

```bash
cd server
```

Create a virtual environment:

```bash
python -m venv .venv
```

Activate it on Windows PowerShell:

```powershell
.venv\Scripts\Activate.ps1
```

Activate it on macOS or Linux:

```bash
source .venv/bin/activate
```

Install backend dependencies:

```bash
pip install -r requirements.txt
```



## Frontend Setup

Open another terminal and move into the frontend folder:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---


---

## Running the Application

### Start the Backend

From the `server` folder:

```bash
uvicorn main:app --reload
```

### Start the Frontend

From the `client` folder:

```bash
npm run dev
```

## Future Improvements

- Authorized audio download
- Authorized video download
- Multiple transcript languages
- Automatic video summaries
- Key-point generation



