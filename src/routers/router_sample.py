from fastapi import APIRouter
from ..Controllers.SentimentAnalysisController import sentiment_score

router = APIRouter(prefix="/sample", tags=["sample"])

@router.get("/")
async def sample():
    return "sample passed"


@router.get('/sentiment_scores/{ticker}')
async def sentiment_scores(ticker):
    sentiment_score(ticker)
    #return {"image_url": f'/Images/{ticker}.png'}


@router.get('/forecast_data/{ticker}')
async def forcast_data(ticker: str):
    return "yay"
    