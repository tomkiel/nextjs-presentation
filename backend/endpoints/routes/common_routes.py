from quart import Blueprint
from backend.endpoints.controllers import common_controller

common = Blueprint("common", __name__, url_prefix="/common")


@common.route("/header-main-menu", methods=["GET"])
def header_main_menu():
    return common_controller.header_main_menu()


def init_app(app):
    app.register_blueprint(common)
