from backend.database.models.product_model import Product, ProductSchema


def get_all():
    """
    Retrieve all products from the database.

    This function queries the database for all records in the `Product` table and
    returns them as a list of serialized data using the `ProductSchema`.

    Returns:
        list or None: A list of serialized product data if found, otherwise None.
    """
    # Query the database for all products
    products = Product.query.all()

    # Serialize the result using the Product schema
    serialized_products = ProductSchema(many=True).dump(products)

    # Return the serialized products, or None if no products are found
    return serialized_products or None
