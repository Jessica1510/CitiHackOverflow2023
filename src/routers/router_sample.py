from fastapi import APIRouter
from ..Controllers.SentimentAnalysisController import sentiment_score
from ..Controllers.TrendAnalysis import loadData
from ..Controllers.Summary import generate_summary_message

router = APIRouter(prefix="", tags=["sample"])

@router.get("/")
async def sample():
    return "sample passed"


@router.get('/sentiment_scores/{ticker}')
async def sentiment_scores(ticker):
    sentiment_score(ticker)
    return {"image_url": f'/Images/{ticker}.svg'}

@router.get('/summary/{ticker}')
async def summary_scores(ticker):
    return generate_summary_message(ticker)


@router.get('/forecast_data/{ticker}')
async def forecast_data(ticker: str):
    return loadData(ticker)
