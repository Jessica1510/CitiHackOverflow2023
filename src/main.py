from fastapi import FastAPI
from fastapi.templating import Jinja2Templates
from starlette.responses import HTMLResponse
from fastapi import Request
from fastapi.staticfiles import StaticFiles
from starlette.templating import _TemplateResponse as templateResponse
from fastapi.middleware.cors import CORSMiddleware


from src.routers import router

relative_path = "src/"

app = FastAPI()

app.include_router(router.router)
origins = [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:3002",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

templates = Jinja2Templates(directory=(relative_path + "templates"))


@app.get('/', response_class=HTMLResponse)
async def root(request: Request) -> templateResponse:
    return templates.TemplateResponse("index.html", {"request": request})
