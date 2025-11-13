from pydantic import BaseModel
from uuid import UUID


class ContainerCreate(BaseModel):
    """Schema for creating a container"""
    name: str
    git_url: str

class ContainerResponse(BaseModel):
    """Schema for container response"""
    id: UUID
    name: str

    git_url: str
    git_branch: str
    
    class Config:
        from_attributes = True

