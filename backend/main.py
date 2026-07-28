from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from helpers.chat_helper import ask_ai
from models import ChatRequest, ContactRequest
from helpers.email_helper import send_contact_email

app = FastAPI()

# Allow React frontend to access this API

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "Fitness Freak AI Backend Running"
    }


@app.post("/chat")
def chat(request: ChatRequest):

    answer = ask_ai(request.message)

    return {
        "answer": answer
    }
    
from helpers.email_helper import send_contact_email

@app.post("/contact")
def contact(request: ContactRequest):

    send_contact_email(request)

    return {
        "success": True,
        "message": "Email sent successfully."
    }