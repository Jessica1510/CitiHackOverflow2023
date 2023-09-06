from fastapi import FastAPI
from fastapi.templating import Jinja2Templates
from starlette.responses import HTMLResponse
from fastapi import Request
from starlette.templating import _TemplateResponse as templateResponse

from src.routers import router_sample

relative_path = "src/"


app = FastAPI()
app.include_router(router_sample.router)

templates = Jinja2Templates(directory=(relative_path + "templates"))


@app.get('/', response_class=HTMLResponse)
async def root(request: Request) -> templateResponse:
    return templates.TemplateResponse("index.html", {"request": request})
