import quart_flask_patch
from flask_caching import Cache

cache = Cache(config={
    'CACHE_TYPE': 'FileSystemCache',
    'CACHE_DIR': '../cache',
})


def init_app(app):
    cache.init_app(app)
