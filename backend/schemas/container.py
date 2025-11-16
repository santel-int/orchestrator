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
    git_branch: Optional[str] = "main"
    env_vars: Optional[List[EnvVarCreate]] = []
    ports: Optional[List[PortCreate]] = []
    volumes: Optional[List[VolumeCreate]] = []

class EnvVarResponse(BaseModel):
    """Schema for environment variable response"""
    key: str
    value: str
    
    class Config:
        from_attributes = True

class PortResponse(BaseModel):
    """Schema for port response"""
    host: str
    container: str

class ContainerListResponse(BaseModel):
    """Schema for container list response"""
    id: UUID
    name: str
    git_url: str

class ContainerResponse(BaseModel):
    """Schema for container response"""
    id: UUID
    name: str

    git_url: str
    git_branch: str

    env_vars: Optional[List[EnvVarResponse]] = []
    ports: Optional[List[PortResponse]] = []

    class Config:
        from_attributes = True

