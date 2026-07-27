from pydantic import BaseModel, EmailStr


class ChatRequest(BaseModel):
    message: str


class ContactRequest(BaseModel):
    name: str
    email: EmailStr | None = None
    phone: str
    message: str