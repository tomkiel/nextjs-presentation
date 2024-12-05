from quart import Quart
from backend.core import configuration


def construct():
    """
    Constructs the Quart application instance.

    This function creates and configures the Quart app by setting the static folder and URL path.
    Additionally, it configures the database URI using the `load_database` method from the `configuration` module.

    Returns:
        Quart app instance: The configured Quart application.
    """
    # Create a Quart app instance
    app = Quart(__name__,
                static_url_path='/static',  # URL path for serving static files
                static_folder='public'  # Folder where static files are stored
                )

    # Configure the SQLAlchemy database URI using configuration from the backend
    app.config["SQLALCHEMY_DATABASE_URI"] = configuration.load_database()

    return app


def create_app():
    """
    Creates and configures the Quart application.

    This function calls `construct()` to build the app and then loads any extensions defined in the configuration
    using the `load_extensions` function from the `configuration` module.

    Returns:
        Quart app instance: The fully configured Quart application with extensions.
    """
    # Build the app
    app = construct()

    # Load any extensions as specified in the configuration
    configuration.load_extensions(app)

    return app
