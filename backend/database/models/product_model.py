from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func
from sqlalchemy_serializer import SerializerMixin
from backend.vendors.database import db
from backend.vendors.marshmallow import ma
from marshmallow import fields

# Fix the relationship
from backend.database.models.product_category_model import ProductCategory, ProductCategorySchema

Base = declarative_base()


# The association table for the many-to-many relationship
product_category_rel = db.Table('product_category_rel',
                                db.Column('product_id', UUID(
                                    as_uuid=True), db.ForeignKey('products.id'), primary_key=True),
                                db.Column('category_id', UUID(
                                    as_uuid=True), db.ForeignKey('product_categories.id'), primary_key=True)
                                )


class Product(db.Model, Base, SerializerMixin):
    __tablename__ = 'products'
    _table_args__ = ({'schema': 'public'})

    id = db.Column(UUID(as_uuid=True), primary_key=True,
                   server_default='gen_random_uuid()', unique=True, nullable=False, )
    product_name = db.Column(db.String(255), nullable=False)
    price = db.Column(db.Numeric(10, 2), nullable=False)
    is_promo = db.Column(db.Boolean, nullable=False)
    promo_price = db.Column(db.Numeric(10, 2))
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now(), onupdate=func.now())

    categories = db.relationship(
        ProductCategory,
        secondary=product_category_rel,
        primaryjoin=id == product_category_rel.c.product_id,
        secondaryjoin=ProductCategory.id == product_category_rel.c.category_id,
        viewonly=True,
        lazy='joined'
    )

    def __init__(self, id, product_name, price, is_promo, promo_price):
        self.id = id
        self.product_name = product_name
        self.price = price
        self.is_promo = is_promo
        self.promo_price = promo_price


class ProductSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        fields = ("id", "product_name", "price",
                  "is_promo", "promo_price", "categories")
        model = Product

    id = ma.auto_field()
    product_name = ma.auto_field()
    price = ma.auto_field()
    is_promo = ma.auto_field()
    promo_price = ma.auto_field()
    categories = fields.Nested('ProductCategorySchema', many=True)
