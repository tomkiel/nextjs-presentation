import quart_flask_patch
from flask_marshmallow import Marshmallow

# Initialize the Marshmallow object
ma = Marshmallow()


def init_app(app):
    """
    Initialize the Flask app with the Marshmallow instance.

    This function configures the Flask app with Marshmallow, enabling the
    use of serialization and deserialization of objects, such as converting
    SQLAlchemy models into JSON and validating input data.

    Args:
        app (Flask): The Flask application instance to configure with Marshmallow.

    Returns:
        None
    """
    # Initialize the Marshmallow instance with the given Flask app
    ma.init_app(app)
