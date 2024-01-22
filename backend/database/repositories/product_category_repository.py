from backend.database.models.product_model import ProductCategory, ProductCategorySchema


def get_all():
    categories = ProductCategory.query.all()
    return ProductCategorySchema(many=True).dump(categories) or None
