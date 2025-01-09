#!/usr/bin/env python
# -*- coding: utf-8 -*-
from .views import view as main_view_blueprints
from .apis import api as main_api_blueprints
from website.blueprints import blueprints as website_blueprints
from access.blueprints import blueprints as access_blueprints

def register(app):
  # append sub blueprints
  modules_blueprints = [
    website_blueprints,
    access_blueprints,
  ]
  # load main blueprint to app
  app.register_blueprint(main_view_blueprints)
  app.register_blueprint(main_api_blueprints)
  # load sub blueprints to app
  for blueprints in modules_blueprints:
    for blueprint in blueprints:
      app.register_blueprint(blueprint)
  # register oauth
  # app.register_blueprint(oauth_view)
  # registar error/access/:code
  # app.register_blueprint(error_view)
