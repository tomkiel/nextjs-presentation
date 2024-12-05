import quart_flask_patch
from flask_sqlalchemy import SQLAlchemy

# Initialize the SQLAlchemy object
db = SQLAlchemy()


def init_app(app):
    """
    Initialize the Flask app with the SQLAlchemy instance.

    This function sets up the SQLAlchemy database connection for the Flask app.
    It must be called during the application setup phase to enable database
    functionality within the app.

    Args:
        app (Flask): The Flask application instance to configure with SQLAlchemy.

    Returns:
        None
    """
    # Initialize the SQLAlchemy instance with the given Flask app
    db.init_app(app)
