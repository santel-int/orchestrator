import fastapi
from contextlib import asynccontextmanager
from fastapi.middleware.cors import CORSMiddleware

from api.routes import __all__ as route_names
import api.routes as routes_module
from database import create_db_and_tables
from models import Container

@asynccontextmanager
async def lifespan(app: fastapi.FastAPI):
    """Lifespan context manager for startup and shutdown events"""
    # Startup
    create_db_and_tables()
    yield
    # Shutdown

app = fastapi.FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Hello, World!"}

# Automatically include all routers from __all__
for route_name in route_names:
    router = getattr(routes_module, route_name)
    app.include_router(router)