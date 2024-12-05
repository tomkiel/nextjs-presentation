from quart import Blueprint
from backend.web.controllers import common_controller

# Define the common blueprint
common = Blueprint("common", __name__, url_prefix="/common")


@common.route("/header-main-menu", methods=["GET"])
def header_main_menu():
    """
    Route to get the main menu for the header.

    This endpoint returns the data needed for the header's main menu.

    Returns:
        JSON response with the main menu data and a 200 HTTP status code.
    """
    return common_controller.header_main_menu()


def init_app(app):
    """
    Initialize and register the common blueprint with the Quart app.

    This function registers the 'common' blueprint with the Quart app instance,
    making the routes for common resources (like the header menu) available.

    Args:
        app (Quart): The Quart application instance.

    Returns:
        None
    """
    app.register_blueprint(common)
