from fastapi import APIRouter
from flask import send_from_directory
from ..Controllers.SentimentAnalysisController import sentiment_scores
from ..Controllers.TrendAnalysis import loadData

router = APIRouter(prefix="/sample", tags=["sample"])

@router.get("/")
async def sample():
    return "sample passed"


@router.get('/sentiment_scores/<ticker>')
async def sentiment_scores(ticker):
    return send_from_directory('../Images', sentiment_scores.png)


@router.get('/forecast_data/{ticker}')
async def forecast_data(ticker: str):
    return loadData(ticker)


    