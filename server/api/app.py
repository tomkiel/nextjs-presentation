from quart import Quart
from api.core import configuration

def construct(**config):
    app = Quart(__name__)
    app.config["SQLALCHEMY_DATABASE_URI"] = configuration.load_database()
    return app

def create_app(**config):
    app = construct(**config)
    configuration.load_extensions(app)
    return app