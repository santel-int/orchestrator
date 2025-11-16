import fastapi
from fastapi import Depends, HTTPException
from sqlmodel import Session, select
from sqlalchemy.orm import selectinload
from typing import List
from uuid import UUID

from database import get_session
from models.container import Container, ContainerEnvVar, ContainerPort
from schemas.container import ContainerCreate, ContainerListResponse, ContainerResponse

router = fastapi.APIRouter(prefix="/containers", tags=["containers"])

@router.get("/", response_model=List[ContainerListResponse])
def get_containers(session: Session = Depends(get_session)):
    """Get all containers"""
    statement = select(Container)
    containers = session.exec(statement).all()
    return containers

@router.get("/{container_id}", response_model=ContainerResponse)
def get_container(container_id: UUID, session: Session = Depends(get_session)):
    """Get a single container by ID"""
    statement = select(Container).where(Container.id == container_id)
    container = session.exec(statement).first()
    if not container:
        raise HTTPException(status_code=404, detail="Container not found")
    return container

@router.post("/", response_model=ContainerResponse, status_code=201)
def create_container(data: ContainerCreate, session: Session = Depends(get_session)):
    """Create a new container"""
    container = Container(name=data.name, git_url=data.git_url, git_branch=data.git_branch or "main")
    
    for env_var in data.env_vars:
        container.env_vars.append(ContainerEnvVar(key=env_var.key, value=env_var.value))
    
    for port in data.ports:
        container.ports.append(ContainerPort(host=port.host, container=port.container))
    
    session.add_all([container, *container.env_vars, *container.ports])
    session.commit()
    session.refresh(container)
    return container

@router.put("/{container_id}", response_model=ContainerResponse)
def update_container(container_id: UUID, data: ContainerCreate, session: Session = Depends(get_session)):
    """Update an existing container"""
    statement = (
        select(Container)
        .where(Container.id == container_id)
        .options(selectinload(Container.env_vars), selectinload(Container.ports))
    )
    container = session.exec(statement).first()
    if not container:
        raise HTTPException(status_code=404, detail="Container not found")
    
    # Update basic fields
    container.name = data.name
    container.git_url = data.git_url
    container.git_branch = data.git_branch or "main"
    
    # Remove existing env_vars and ports
    for env_var in container.env_vars:
        session.delete(env_var)
    for port in container.ports:
        session.delete(port)
    
    # Clear the lists
    container.env_vars.clear()
    container.ports.clear()
    
    # Add new env_vars and ports
    for env_var in data.env_vars:
        container.env_vars.append(ContainerEnvVar(key=env_var.key, value=env_var.value))
    
    for port in data.ports:
        container.ports.append(ContainerPort(host=port.host, container=port.container))
    
    session.add(container)
    session.commit()
    session.refresh(container)
    return container