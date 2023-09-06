from fastapi import APIRouter


router = APIRouter(prefix="/sample", tags=["sample"])


@router.get("/")
async def sample():
    return "sample passed"
