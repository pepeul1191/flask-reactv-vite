# !/usr/bin/env python
# -*- coding: utf-8 -*-
from flask import Flask, render_template

APP = Flask(
  __name__,
  static_folder='../static',
  static_url_path='/'
)

@APP.route('/')
def home():
  return render_template('home.html')