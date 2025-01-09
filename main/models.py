# !/usr/bin/env python
# -*- coding: utf-8 -*-
from sqlalchemy import create_engine, Column, Integer, String, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
# from sqlalchemy.orm import relationship, sessionmaker
from main.database import Serilizable

Base = declarative_base()

class PlayStyle(Base, Serilizable):
  __tablename__ = 'play_styles'
  id = Column(Integer, primary_key=True, autoincrement=True)
  name = Column(String(30))

class Sex(Base, Serilizable):
  __tablename__ = 'sexs'
  id = Column(Integer, primary_key=True, autoincrement=True)
  name = Column(String(7))

class Nation(Base, Serilizable):
  __tablename__ = 'nations'
  id = Column(Integer, primary_key=True, autoincrement=True)
  name = Column(String(40))

class Position(Base, Serilizable):
  __tablename__ = 'positions'
  id = Column(Integer, primary_key=True, autoincrement=True)
  name = Column(String(10))

class Foot(Base, Serilizable):
  __tablename__ = 'foots'
  id = Column(Integer, primary_key=True, autoincrement=True)
  name = Column(String(6))

class League(Base, Serilizable):
  __tablename__ = 'leagues'
  id = Column(Integer, primary_key=True, autoincrement=True)
  name = Column(String(30))
  nation_id = Column(Integer, ForeignKey('nations.id'))
  # nation = relationship("Nation", back_populates="leagues")

class Team(Base, Serilizable):
  __tablename__ = 'teams'
  id = Column(Integer, primary_key=True, autoincrement=True)
  name = Column(String(40))
  league_id = Column(Integer, ForeignKey('leagues.id'))
  # league = relationship("League", back_populates="teams")

class Player(Base, Serilizable):
  __tablename__ = 'players'
  id = Column(Integer, primary_key=True, autoincrement=True)
  name = Column(String(60))
  rank = Column(Integer)
  weak_foot = Column(Integer)
  skill_moves = Column(Integer)
  height = Column(Integer)
  weight = Column(Integer)
  age = Column(Integer)
  url = Column(String(120))
  foot_id = Column(Integer, ForeignKey('foots.id'))
  sex_id = Column(Integer, ForeignKey('sexs.id'))
  position_id = Column(Integer, ForeignKey('positions.id'))
  nation_id = Column(Integer, ForeignKey('nations.id'))
  team_id = Column(Integer, ForeignKey('teams.id'))
  # foot = relationship("Foot")
  # sex = relationship("Sex")
  # position = relationship("Position")
  # nation = relationship("Nation")
  # team = relationship("Team")

class CommonDetail(Base, Serilizable):
  __tablename__ = 'common_details'
  id = Column(Integer, primary_key=True, autoincrement=True)
  overall = Column(Integer)
  velocity = Column(Integer)
  shooting = Column(Integer)
  passing = Column(Integer)
  dribbling = Column(Integer)
  defending = Column(Integer)
  physicality = Column(Integer)
  player_id = Column(Integer, ForeignKey('players.id'))
  # player = relationship("Player", back_populates="common_details")

class GoalkeeperDetail(Base, Serilizable):
  __tablename__ = 'goalkeeper_details'
  id = Column(Integer, primary_key=True, autoincrement=True)
  diving = Column(Integer)
  handling = Column(Integer)
  kicking = Column(Integer)
  positioning = Column(Integer)
  reflexes = Column(Integer)
  player_id = Column(Integer, ForeignKey('players.id'))
  # player = relationship("Player", back_populates="goalkeeper_details")

class PlayerPlayStyle(Base, Serilizable):
  __tablename__ = 'players_play_styles'
  id = Column(Integer, primary_key=True, autoincrement=True)
  play_style_id = Column(Integer, ForeignKey('play_styles.id'))
  player_id = Column(Integer, ForeignKey('players.id'))
  # play_style = relationship("PlayStyle")
  # player = relationship("Player", backref="play_styles")

class PlayerPosition(Base, Serilizable):
  __tablename__ = 'players_positions'
  id = Column(Integer, primary_key=True, autoincrement=True)
  position_id = Column(Integer, ForeignKey('positions.id'))
  player_id = Column(Integer, ForeignKey('players.id'))
  # position = relationship("Position")
  # player = relationship("Player", backref="positions")
