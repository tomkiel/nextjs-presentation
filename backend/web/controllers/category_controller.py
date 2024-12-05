from quart import jsonify
from backend.database.repositories import product_category_repository


def index():
    """
    @api {get} /categories Get all product categories

    This route handles the request to retrieve all product categories from the
    database. It fetches the categories using the `product_category_repository` 
    and returns them in the response.

    Returns:
        JSON response containing a list of product categories and a 200 HTTP status code.
    """
    categories = product_category_repository.get_all() or None
    return jsonify(
        {
            "categories": categories
        }
    ), 200


def featured_categories():
    """
    @api {get} /categories/featured Get the featured product categories

    This route fetches the principal or featured product categories. Currently, 
    this returns an empty dictionary but can be extended to return actual featured categories.

    Returns:
        JSON response with a description and a list of featured product categories.
    """
    categories = {}
    return jsonify(
        {
            "description": "The featured product categories",
            "categories": categories
        }
    ), 200
