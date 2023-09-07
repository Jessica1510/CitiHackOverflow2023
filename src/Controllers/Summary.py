import os
import openai
from dotenv import load_dotenv

load_dotenv()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
openai.api_key = OPENAI_API_KEY


def generate_summary_message(ticker):
    chat_completion = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": "From a financial standpoint, can you tell me more about this ticker: " + ticker}])
    summary_message = chat_completion.choices[0].message.content
    return summary_message

def generate_insights_articles(article1, article2, article3, ticker):
    chat_completion = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": "The 3 recent articles for the ticker: " + ticker + " is ```" + article1 + "```, ```" + article2 + "```, and ```" + article3 + "```. Tell me about the risks that the company might face, and how should an investor handle such risks."}])
    summary_message = chat_completion.choices[0].message.content
    return summary_message
