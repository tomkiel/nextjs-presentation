from quart import jsonify
from backend.database.repositories import product_repository


def index():
    """"
    @api {get} /api/products Get all products
    """
    products = product_repository.get_all() or None
    
    return jsonify(
        {
            "products": products
        }
    ), 200
