#!/usr/bin/env python
# -*- coding: utf-8 -*-
import json
import traceback
from flask import Blueprint
from sqlalchemy.orm import scoped_session
from main.database import Session
from main.models import PlayStyle

api = Blueprint('access-api', __name__)

@api.route('/api/v1/play_styles', methods=['GET'])
def play_styles():
  resp = None
  status = 200
  try:
    playstyles = Session.query(PlayStyle).all()
    resp = json.dumps([playstyle.to_dict() for playstyle in playstyles])
  except Exception as e:
    traceback.print_exc()
    resp = str(e)
    status = 500
  return resp, status