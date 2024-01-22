from quart import Blueprint
from backend.endpoints.controllers import category_controller


category = Blueprint("category", __name__, url_prefix="/categories")


@category.route("/", methods=["GET"])
def index():
    return category_controller.index()


@category.route("/featured", methods=["GET"])
def featured_categories():
    return category_controller.featured_categories()


def init_app(app):
    app.register_blueprint(category)
