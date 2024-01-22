from quart import jsonify
from backend.database.repositories import product_category_repository


def index():
    """"
    @api {get} /categories Get all products categories
    """
    categories = product_category_repository.get_all() or None
    return jsonify(
        {
            "categories": categories
        }
    ), 200


def featured_categories():
    """
    @api {get} /categories/featured Get the principal product categories
    """
    categories = {}
    return jsonify(
        {
            "description": "The featured product categories",
            "categories": categories
        }
    ), 200
