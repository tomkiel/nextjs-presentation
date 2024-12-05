import quart_flask_patch
from flask_caching import Cache

# Initialize the Cache object with the configuration
cache = Cache(config={
    'CACHE_TYPE': 'FileSystemCache',
    'CACHE_DIR': '../cache',
})


def init_app(app):
    """
    Initialize the Flask app with the caching system.

    This function configures the Flask app with the cache settings defined in
    the Cache object. It is called to integrate caching into the app's lifecycle.

    Args:
        app (Flask): The Flask application instance to configure.

    Returns:
        None
    """
    # Initialize the cache with the given Flask app
    cache.init_app(app)
