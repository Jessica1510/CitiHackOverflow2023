from fastapi import APIRouter
from ..Controllers.SentimentAnalysisController import sentiment_score
from ..Controllers.TrendAnalysis import loadData
from ..Controllers.Summary import generate_summary_message, generate_insights_articles
import json
from fastapi.responses import JSONResponse

router = APIRouter(prefix="", tags=["sample"])


@router.get("/")
async def sample():
    return "sample passed"


@router.get('/sentiment_scores/{ticker}')
async def sentiment_scores(ticker):
    headlines, sentiment_graph = sentiment_score(ticker)

    article_insights = generate_insights_articles(
        headlines["headline1"],
        headlines["headline2"],
        headlines["headline3"],
        ticker
    )

    response = {
        "image": sentiment_graph,
        "article_insights": article_insights
    }

    return JSONResponse(content=response)


@router.get('/summary/{ticker}')
async def summary_scores(ticker):
    return generate_summary_message(ticker)


@router.get('/forecast_data/{ticker}')
async def forecast_data(ticker: str):
    return loadData(ticker)
