from sqlmodel import SQLModel, Field
from uuid import UUID, uuid4


class Container(SQLModel, table=True):
    """Container model for database"""
    __tablename__ = "containers"
    
    id: UUID = Field(default_factory=uuid4, primary_key=True)
    name: str

    git_url: str = Field(default="") # https://github.com/santel-int/hello-world
    git_branch: str = Field(default="main")
