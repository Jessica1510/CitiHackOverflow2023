from fastapi import APIRouter
from flask import send_from_directory
from Controllers.SentimentAnalysisController import sentiment_scores

router = APIRouter(prefix="/sample", tags=["sample"])

@router.get("/")
async def sample():
    return "sample passed"


@router.get('/sentiment_scores/<ticker>')
async def sentiment_scores(ticker):
    return send_from_directory('../Images', sentiment_scores.png)


@router.get('/forecast_data/{ticker}')
async def forcast_data(ticker: str):
    