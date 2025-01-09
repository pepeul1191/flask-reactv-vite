# !/usr/bin/env python
# -*- coding: utf-8 -*-
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base

class Serilizable:
  def to_dict(self):
    return {key: value for key, value in self.__dict__.items() if not key.startswith('_') and key != '_sa_instance_state'}

engine = create_engine('sqlite:///db/fifa25.db')
session_factory = sessionmaker(bind=engine)
Session = scoped_session(session_factory)

Base = declarative_base()