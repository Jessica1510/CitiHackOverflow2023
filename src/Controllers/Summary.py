import os
import openai
from dotenv import load_dotenv

load_dotenv()

OPENAI_API_KEY=os.getenv("OPENAI_API_KEY")
openai.api_key= OPENAI_API_KEY

def generate_summary_message(ticker):
    chat_completion = openai.ChatCompletion.create(model="gpt-4", messages=[{"role": "user", "content": "give me a summary of " + ticker}])
    summary_message = chat_completion.choices[0].message.content
    return summary_message
