from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func
from sqlalchemy_serializer import SerializerMixin
from api.vendors.database import db
from api.vendors.marshmallow import ma

Base = declarative_base()


class Product(db.Model, Base, SerializerMixin):
    __tablename__ = 'products'

    id = db.Column(UUID(as_uuid=True), primary_key=True,
                server_default='gen_random_uuid()', unique=True, nullable=False)
    product_name = db.Column(db.String(255), nullable=False)
    images = db.Column(db.Text, nullable=False)
    price = db.Column(db.Numeric(10, 2), nullable=False)
    categories = db.Column(db.Text, nullable=False)
    is_promo = db.Column(db.Boolean, nullable=False)
    promo_price = db.Column(db.Numeric(10, 2))
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True),
                        server_default=func.now(), onupdate=func.now())

    def __init__(self, id, product_name, images, price, categories, is_promo, promo_price):
        self.id = id
        self.product_name = product_name
        self.images = images
        self.price = price
        self.categories = categories
        self.is_promo = is_promo
        self.promo_price = promo_price


class ProductSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        fields = ("id", "product_name", "images", "price",
                  "categories", "is_promo", "promo_price")
        model = Product

    id = ma.auto_field()
    product_name = ma.auto_field()
    images = ma.auto_field()
    price = ma.auto_field()
    categories = ma.auto_field()
    is_promo = ma.auto_field()
    promo_price = ma.auto_field()
