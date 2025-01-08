# !/usr/bin/env python
# -*- coding: utf-8 -*-
from flask import Flask, render_template
import json

APP = Flask(
  __name__,
  static_folder='../static',
  static_url_path='/'
)

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