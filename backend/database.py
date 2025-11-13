from sqlmodel import SQLModel, create_engine, Session
from typing import Generator

# SQLite database URL
DATABASE_URL = "sqlite:///./orchestrator.db"

# Create engine
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})

def get_session() -> Generator[Session, None, None]:
    """Dependency to get database session"""
    with Session(engine) as session:
        yield session

def create_db_and_tables():
    """Create database tables"""
    SQLModel.metadata.create_all(engine)

