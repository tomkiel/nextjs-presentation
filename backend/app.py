from quart import Quart
from backend.core import configuration


def construct():
    app = Quart(__name__,
                static_url_path='/static',
                static_folder='public'
                )
    app.config["SQLALCHEMY_DATABASE_URI"] = configuration.load_database()
    return app


def create_app():
    app = construct()
    configuration.load_extensions(app)
    return app
