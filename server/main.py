import uvicorn
from controllers.rag_controllers import ask_question


if __name__ == "__main__":
    # uvicorn.run("app.app:app", host="0.0.0.0",port=8000, reload=True)
    ask_question()
