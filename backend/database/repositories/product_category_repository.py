from backend.database.models.product_model import ProductCategory, ProductCategorySchema

def get_all():
    """
    Retrieve all product categories from the database.

    This function queries the database for all records in the `ProductCategory` table and
    returns them as a list of serialized data using the `ProductCategorySchema`.

    Returns:
        list or None: A list of serialized product categories if found, otherwise None.
    """
    # Query the database for all product categories
    categories = ProductCategory.query.all()

    # Serialize the result using the ProductCategory schema
    serialized_categories = ProductCategorySchema(many=True).dump(categories)

    # Return the serialized categories, or None if no categories are found
    return serialized_categories or None
