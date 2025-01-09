# !/usr/bin/env python
# -*- coding: utf-8 -*-
import json
import traceback
from flask import Flask, render_template
from sqlalchemy.orm import scoped_session
from main.database import Session
from main.models import PlayStyle

APP = Flask(
  __name__,
  static_folder='../static',
  static_url_path='/'
)

@APP.teardown_appcontext
def remove_session(*args, **kwargs):
  Session.remove()

@APP.route('/about', methods=['GET'])
@APP.route('/', methods=['GET'])
def home():
  return render_template('home.html')

@APP.route('/api/v1/sliders', methods=['GET'])
def sliders():
  r = [
    {
        "id": 1,
        "titulo de noticia": "Nueva Tecnología en Desarrollo",
        "image": "https://via.placeholder.com/150",
        "title": "Avances Tecnológicos",
        "description": "Descubre los últimos avances en la tecnología de IA que están transformando la industria."
    },
    {
        "id": 2,
        "titulo de noticia": "Economía Global en 2023",
        "image": "https://via.placeholder.com/150",
        "title": "Impacto Económico",
        "description": "Análisis del impacto económico global de los eventos recientes y lo que se espera para el resto del año."
    },
    {
        "id": 3,
        "titulo de noticia": "Salud y Bienestar en el Siglo XXI",
        "image": "https://via.placeholder.com/150",
        "title": "Nuevas Tendencias en Salud",
        "description": "Explorando cómo las nuevas tecnologías están mejorando nuestra salud y bienestar."
    }
  ]
  return json.dumps(r), 200

@APP.route('/api/v1/play_styles', methods=['GET'])
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