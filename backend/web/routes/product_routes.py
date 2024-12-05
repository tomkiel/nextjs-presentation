from quart import Blueprint
from backend.web.controllers import product_controller

# Define the product blueprint
product = Blueprint("product", __name__, url_prefix="/products")


@product.route("/", methods=["GET"])
def index():
    """
    Route to get all products.

    This endpoint returns a list of all products.

    Returns:
        JSON response with the list of products and a 200 HTTP status code.
    """
    return product_controller.index()


def init_app(app):
    """
    Initialize and register the product blueprint with the Quart app.

    This function registers the 'product' blueprint with the Quart app instance,
    making the routes for product resources available.

    Args:
        app (Quart): The Quart application instance.

    Returns:
        None
    """
    app.register_blueprint(product)
