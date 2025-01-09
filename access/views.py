#!/usr/bin/env python
# -*- coding: utf-8 -*-
from flask import Blueprint, render_template

view = Blueprint('access-view', __name__, template_folder='./templates')

@view.route('/sign-in', methods=['GET'])
@view.route('/sign-up', methods=['GET'])
@view.route('/reset-password', methods=['GET'])
def index():
  locals = {}
  return render_template('access.html', locals = locals)
  