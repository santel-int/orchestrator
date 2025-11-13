import fastapi
from fastapi import Depends
from sqlmodel import Session, select
from typing import List

from database import get_session
from models.container import Container
from schemas.container import ContainerCreate, ContainerResponse

router = fastapi.APIRouter(prefix="/containers", tags=["containers"])

@router.get("/", response_model=List[ContainerResponse])
def get_containers(session: Session = Depends(get_session)):
    """Get all containers"""
    statement = select(Container)
    containers = session.exec(statement).all()
    return containers

@router.post("/", response_model=ContainerResponse, status_code=201)
def create_container(container_data: ContainerCreate, session: Session = Depends(get_session)):
    """Create a new container"""
    container = Container(name=container_data.name)
    session.add(container)
    session.commit()
    session.refresh(container)
    return container