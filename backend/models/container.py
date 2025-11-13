from sqlmodel import SQLModel, Field
from uuid import UUID, uuid4


class Container(SQLModel, table=True):
    """Container model for database"""
    __tablename__ = "containers"
    
    id: UUID = Field(default_factory=uuid4, primary_key=True)
    name: str

