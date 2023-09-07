from urllib.request import urlopen, Request
from bs4 import BeautifulSoup
import pandas as pd
import matplotlib.pyplot as plt
import plotly
import plotly.express as px
import nltk
import os
nltk.downloader.download('vader_lexicon')
from nltk.sentiment.vader import SentimentIntensityAnalyzer

finwiz_url = 'https://finviz.com/quote.ashx?t='


def sentiment_score(ticker):

    req_url = finwiz_url + ticker
    request = Request(url = req_url, headers={'user-agent':'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:20.0) Gecko/20100101 Firefox/20.0'}) 
    response = urlopen(request)
    #Web scrape the response
    htmlRes = BeautifulSoup(response)
    #Get news table from html
    news = htmlRes.find(id='news-table')

    clean_news = []
    for i in news.findAll('tr'):
        headline = i.a.get_text()
        date_info = i.td.text.split()

        if len(date_info) == 2:
            date = date_info[0]
            time = date_info[1]

        else:
            time = date_info[0]
            
        clean_data = [date, time, headline]
        clean_news.append(clean_data)


        columns = ['date', 'time', 'headline']
        news_table = pd.DataFrame(clean_news, columns = columns)

    vader = SentimentIntensityAnalyzer()

    sentiment_scores = news_table['headline'].apply(vader.polarity_scores).tolist()
    scores = pd.DataFrame(sentiment_scores)

    news_scores_table = news_table.join(scores, rsuffix='_right')

    first_three_headlines = news_scores_table.iloc[:3]['headline']

    headline_dict = {
        "headline1": first_three_headlines.iloc[0],
        "headline2": first_three_headlines.iloc[1],
        "headline3": first_three_headlines.iloc[2]
    }

    plt.figure(figsize = (13, 13))
    df = news_scores_table.groupby('date')['compound'].mean()
    #df = df.unstack()
    #df = df.xs('compound', axis="columns").transpose()
    #df.plot(kind='bar')
    df = df.reset_index()
    df.columns = ['date', 'mean_compound_score']
    df.plot(x='date', y='mean_compound_score', kind='bar')

    script_dir = os.path.dirname(__file__)
    src_dir = os.path.dirname(script_dir)
    #main_dir = os.path.dirname(src_dir)
    #images_dir = os.path.join(main_dir, 'frontend/public/')
    images_dir = os.path.join(src_dir, 'Images/')
    plt.savefig(images_dir + f'{ticker}.svg', format="svg")

    return headline_dict


        
"""
def get_news(ticker):
    req_url = finwiz_url + ticker
    request = Request(url = req_url, headers={'user-agent':'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:20.0) Gecko/20100101 Firefox/20.0'}) 
    response = urlopen(request)
    #Web scrape the response
    htmlRes = BeautifulSoup(response)
    #Get news table from html
    news = htmlRes.find(id='news-table')
    return news

def clean_news(news):
    clean_news = []
    for i in news.findAll('tr'):
        headline = i.a.get_text()
        date_info = i.td.text.split()

        if len(date_info) == 2:
            date = date_info[0]
            time = date_info[1]

        else:
            time = date_info[0]
            
        clean_data = [date, time, headline]
        clean_news.append(clean_data)


        columns = ['date', 'time', 'headline']
        news_table = pd.DataFrame(clean_news, columns = columns)

    return news_table

def score(news_df):
        vader = SentimentIntensityAnalyzer()

        sentiment_scores = news_df['headline'].apply(vader.polarity_scores).tolist()
        scores = pd.DataFrame(sentiment_scores)

        news_scores_table = news_df.join(scores, rsuffix='_right')
        return news_scores_table

def plot_graph(scored_news):
     
    plt.figure(figsize = (13, 13))
    df = scored_news.mean()
    df = df.unstack()
    df = df.xs('compound', axis="columns").transpose()
    df.plot(kind='bar')
    plt.savefig('../Images/sentiment_scores.png')


def sentiment_scores(ticker):
     news_table = get_news(ticker)
     clean_news = clean_news(news_table)
     score_news = score(clean_news)
     plot_graph(score_news)
"""

    