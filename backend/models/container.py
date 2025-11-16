from sqlmodel import Relationship, SQLModel, Field
from uuid import UUID, uuid4
from datetime import datetime
from typing import List

class Container(SQLModel, table=True):
    """Container model for database"""
    __tablename__ = "containers"
    
    id: UUID = Field(default_factory=uuid4, primary_key=True)
    name: str = Field(index=True, unique=True)

    git_url: str = Field(default="") # https://github.com/santel-int/hello-world
    git_branch: str = Field(default="main")

    created_at: datetime = Field(default_factory=datetime.now)

    env_vars: List["ContainerEnvVar"] = Relationship(back_populates="container")
    ports: List["ContainerPort"] = Relationship(back_populates="container")

class ContainerEnvVar(SQLModel, table=True):
    """Container environment variable model for database"""
    __tablename__ = "container_env_vars"
    
    id: UUID = Field(default_factory=uuid4, primary_key=True)
    container_id: UUID = Field(foreign_key="containers.id")
    key: str = Field(index=True)
    value: str = Field(index=True)

    container: Container = Relationship(back_populates="env_vars")

class ContainerPort(SQLModel, table=True):
    """Container port model for database"""
    __tablename__ = "container_ports"
    
    id: UUID = Field(default_factory=uuid4, primary_key=True)
    container_id: UUID = Field(foreign_key="containers.id")
    host: str = Field(index=True)
    container: str = Field(index=True)

    container: Container = Relationship(back_populates="ports")