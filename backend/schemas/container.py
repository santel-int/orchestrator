from pydantic import BaseModel
from uuid import UUID
from typing import List, Optional

class PortCreate(BaseModel):
    """Schema for creating a port"""
    host: str
    container: str

class VolumeCreate(BaseModel):
    """Schema for creating a volume"""
    name: str
    mount_path: str

class EnvVarCreate(BaseModel):
    """Schema for creating an environment variable"""
    key: str
    value: str

class ContainerCreate(BaseModel):
    """Schema for creating a container"""
    name: str
    git_url: str
    env_vars: Optional[List[EnvVarCreate]] = []
    ports: Optional[List[PortCreate]] = []
    volumes: Optional[List[VolumeCreate]] = []

class EnvVarResponse(BaseModel):
    """Schema for environment variable response"""
    key: str
    value: str
    
    class Config:
        from_attributes = True

class ContainerResponse(BaseModel):
    """Schema for container response"""
    id: UUID
    name: str

    git_url: str
    git_branch: str
    env_vars: Optional[List[EnvVarResponse]] = []
    
    class Config:
        from_attributes = True

