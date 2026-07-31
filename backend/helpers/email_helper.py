import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
import traceback
from dotenv import load_dotenv

load_dotenv()

EMAIL = os.getenv("EMAIL")
PASSWORD = os.getenv("APP_PASSWORD")
SEND_MESSAGE_TO = os.getenv("SEND_MESSAGE_TO")
EMAIL_SUBJECT = os.getenv("EMAIL_SUBJECT")


def send_contact_email(data):
    print("\n========== EMAIL DEBUG ==========")
    print("EMAIL:", EMAIL)
    print("PASSWORD EXISTS:", PASSWORD is not None)
    print("SEND_MESSAGE_TO:", SEND_MESSAGE_TO)
    print("EMAIL_SUBJECT:", EMAIL_SUBJECT)

    try:
        message = MIMEMultipart()

        message["From"] = EMAIL
        message["To"] = SEND_MESSAGE_TO
        message["Subject"] = EMAIL_SUBJECT

        body = f"""
New Contact Form Submission

Name: {data.name}
Email: {data.email if data.email else "Not Provided"}
Phone: {data.phone}

Message:
{data.message}
"""

        message.attach(MIMEText(body, "plain"))

        print("Connecting to Gmail...")
        server = smtplib.SMTP("smtp.gmail.com", 587)

        print("Starting TLS...")
        server.starttls()

        print("Logging in...")
        server.login(EMAIL, PASSWORD)
        print("Login successful.")

        print("Recipients:", message.get_all("To"))
        print("Sending email...")

        server.send_message(
            message,
            from_addr=EMAIL,
            to_addrs=[SEND_MESSAGE_TO],
        )

        print("Email sent successfully!")
        server.quit()

    except Exception as e:
        print("\n========== ERROR ==========")
        print(type(e).__name__)
        print(str(e))
        traceback.print_exc()
        raise

    finally:
        print("========== END DEBUG ==========\n")