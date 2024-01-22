from backend.database.models.product_model import Product, ProductSchema


def get_all():
    products = Product.query.all()
    return ProductSchema(many=True).dump(products) or None

    