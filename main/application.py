# !/usr/bin/env python
# -*- coding: utf-8 -*-
from flask import Flask, render_template
from main.database import Session

APP = Flask(
  __name__,
  static_folder='../static',
  static_url_path='/'
)

@APP.teardown_appcontext
def remove_session(*args, **kwargs):
  Session.remove()
