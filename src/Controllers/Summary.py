from newsapi import NewsApiClient
import os
import openai

OPENAI_API_KEY= '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'
api = NewsApiClient(api_key = '86e5092894b74369aab1033df6f3a69f')
openai.api_key= OPENAI_API_KEY

# print(api.get_everything(q = 'apple AND finance',sort_by = 'popularity' ))


chat_completion = openai.ChatCompletion.create(model="gpt-4", messages=[{"role": "user", "content": "give me a summary of appl "}])

print(chat_completion)