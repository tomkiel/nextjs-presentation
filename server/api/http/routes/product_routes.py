from quart import Blueprint
from api.http.controllers import product_controller


product = Blueprint("product", __name__, url_prefix="/api/products")


@product.route("/", methods=["GET"])
def index():
    return product_controller.index()


def init_app(app):
    app.register_blueprint(product)
