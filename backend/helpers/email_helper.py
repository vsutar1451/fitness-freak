import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv

load_dotenv()

EMAIL = os.getenv("EMAIL")
PASSWORD = os.getenv("APP_PASSWORD")
SEND_EMAIL_TO = os.getenv("SEND_MESSAGE_TO")
EMAIL_SUBJECT = os.getenv("EMAIL_SUBJECT")

def send_contact_email(data):
    message = MIMEMultipart()

    message["From"] = EMAIL
    message["To"] = SEND_EMAIL_TO
    message["Subject"] = EMAIL_SUBJECT

    body = f"""
New Contact Form Submission

Name: {data.name}

Email: {data.email}

Phone: {data.phone}

Message:

{data.message}
"""

    message.attach(MIMEText(body, "plain"))

    server = smtplib.SMTP("smtp.gmail.com", 587)
    server.starttls()
    server.login(EMAIL, PASSWORD)

    server.send_message(message)

    server.quit()