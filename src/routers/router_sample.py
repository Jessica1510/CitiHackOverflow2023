from fastapi import APIRouter
from ..Controllers.SentimentAnalysisController import sentiment_score
from ..Controllers.TrendAnalysis import loadData
from ..Controllers.Summary import generate_summary_message
import json
from fastapi.responses import JSONResponse

router = APIRouter(prefix="", tags=["sample"])

@router.get("/")
async def sample():
    return "sample passed"


@router.get('/sentiment_scores/{ticker}')
async def sentiment_scores(ticker):
    headlines = sentiment_score(ticker)

    response = {
        "image_url": f'/Images/{ticker}.svg',
        "headline1": headlines["headline1"],
        "headline2": headlines["headline2"],
        "headline3": headlines["headline3"],
    }

    return JSONResponse(content=response)

@router.get('/summary/{ticker}')
async def summary_scores(ticker):
    return generate_summary_message(ticker)


@router.get('/forecast_data/{ticker}')
async def forecast_data(ticker: str):
    return loadData(ticker)
