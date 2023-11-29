from quart import jsonify
from api.database.repositories import product_repository


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
