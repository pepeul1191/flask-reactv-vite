#!/usr/bin/env python
# -*- coding: utf-8 -*-
from flask import Blueprint, render_template

view = Blueprint('web-site', __name__, template_folder='./templates')

@view.route('/', methods=['GET'])
@view.route('/about', methods=['GET'])
@view.route('/contact', methods=['GET'])
def index():
  locals = {}
  return render_template('index.html', locals = locals)
  