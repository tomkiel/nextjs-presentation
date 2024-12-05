from quart import jsonify
from backend.database.repositories import product_repository


def index():
    """
    Retrieves all the products.

    This endpoint fetches all product data from the database through the `product_repository`.
    If no products are found, it returns an empty list.

    @api {get} /api/products Get all products
    @apiName GetAllProducts
    @apiGroup Product

    Returns:
        json: A JSON object containing a list of products.
        HTTP Status Code 200: Successful retrieval of products.
    """
    # Fetch all products from the repository
    products = product_repository.get_all() or []

    # Return the products in a JSON response
    return jsonify({
        "products": products
    }), 200
