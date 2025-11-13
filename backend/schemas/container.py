from pydantic import BaseModel
from uuid import UUID


class ContainerCreate(BaseModel):
    """Schema for creating a container"""
    name: str


class ContainerResponse(BaseModel):
    """Schema for container response"""
    id: UUID
    name: str
    
    class Config:
        from_attributes = True

