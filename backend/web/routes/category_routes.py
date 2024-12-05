from quart import Blueprint
from backend.web.controllers import category_controller

# Define the category blueprint
category = Blueprint("category", __name__, url_prefix="/categories")


@category.route("/", methods=["GET"])
def index():
    """
    Route to get all product categories.

    This endpoint returns a list of all product categories.

    Returns:
        JSON response with the list of categories and a 200 HTTP status code.
    """
    return category_controller.index()


@category.route("/featured", methods=["GET"])
def featured_categories():
    """
    Route to get featured product categories.

    This endpoint returns a list of featured product categories.

    Returns:
        JSON response with featured categories and a 200 HTTP status code.
    """
    return category_controller.featured_categories()


def init_app(app):
    """
    Initialize and register the category blueprint with the Flask app.

    This function registers the 'category' blueprint with the Quart app instance
    and sets up the routing for the categories endpoints.

    Args:
        app (Quart): The Quart application instance.

    Returns:
        None
    """
    app.register_blueprint(category)
