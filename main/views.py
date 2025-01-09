#!/usr/bin/env python
# -*- coding: utf-8 -*-
from flask import Blueprint, render_template

view = Blueprint('main', __name__, template_folder='./templates')

@view.route('/demo', methods=['GET'])
def index():
  locals = {}
  return render_template('demo.html', locals = locals)
  