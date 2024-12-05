from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql import func
from sqlalchemy_serializer import SerializerMixin
from backend.vendors.database import db
from backend.vendors.marshmallow import ma
from marshmallow import fields

# Importing ProductCategory and its schema to establish a relationship
from backend.database.models.product_category_model import ProductCategory, ProductCategorySchema

# Define the base for the SQLAlchemy models
Base = declarative_base()

# Association table for the many-to-many relationship between Product and ProductCategory
product_category_rel = db.Table(
    'product_category_rel',
    db.Column('product_id', UUID(as_uuid=True),
              db.ForeignKey('product.id'), primary_key=True),
    db.Column('category_id', UUID(as_uuid=True), db.ForeignKey(
        'product_category.id'), primary_key=True)
)


class Product(db.Model, Base, SerializerMixin):
    """
    Product model represents a product entity in the database.

    Attributes:
        id (UUID): Unique identifier for the product.
        product_name (str): The name of the product.
        price (Decimal): The price of the product.
        is_promo (bool): Whether the product is on promotion.
        promo_price (Decimal, optional): The promotional price if the product is on promotion.
        created_at (datetime): Timestamp when the product was created.
        updated_at (datetime): Timestamp when the product was last updated.
        categories (list): List of product categories associated with the product.
    """

    __tablename__ = 'product'
    _table_args__ = ({'schema': 'public'})

    # Unique identifier for each product
    id = db.Column(UUID(as_uuid=True), primary_key=True,
                   default=func.gen_random_uuid(), unique=True, nullable=False)

    # Name of the product
    product_name = db.Column(db.String(255), nullable=False)

    # Price of the product
    price = db.Column(db.Numeric(10, 2), nullable=False)

    # Boolean indicating whether the product is on promotion
    is_promo = db.Column(db.Boolean, nullable=False)

    # Price of the product when on promotion
    promo_price = db.Column(db.Numeric(10, 2))

    # Timestamp when the product was created
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())

    # Timestamp when the product was last updated
    updated_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now(), onupdate=func.now())

    # Many-to-many relationship between Product and ProductCategory
    categories = db.relationship(
        ProductCategory,
        secondary=product_category_rel,
        primaryjoin=id == product_category_rel.c.product_id,
        secondaryjoin=ProductCategory.id == product_category_rel.c.category_id,
        viewonly=True,
        lazy='joined'
    )

    def __init__(self, product_name, price, is_promo, promo_price=None, id=None):
        """
        Initialize a Product instance.

        Args:
            product_name (str): The name of the product.
            price (Decimal): The price of the product.
            is_promo (bool): Whether the product is on promotion.
            promo_price (Decimal, optional): The promotional price if applicable.
            id (UUID, optional): The unique identifier for the product. If not provided, a new UUID will be generated.
        """
        self.id = id or func.gen_random_uuid()
        self.product_name = product_name
        self.price = price
        self.is_promo = is_promo
        self.promo_price = promo_price

    def __repr__(self):
        """Return a string representation of the Product instance."""
        return f"<Product(id={self.id}, product_name={self.product_name}, price={self.price})>"


class ProductSchema(ma.SQLAlchemyAutoSchema):
    """
    Marshmallow schema for serializing and deserializing Product instances.

    Attributes:
        id (UUID): Unique identifier for the product.
        product_name (str): The name of the product.
        price (Decimal): The price of the product.
        is_promo (bool): Whether the product is on promotion.
        promo_price (Decimal, optional): The promotional price if the product is on promotion.
        categories (list): List of categories the product belongs to.
    """

    class Meta:
        # Fields to include in the serialized output
        fields = ("id", "product_name", "price",
                  "is_promo", "promo_price", "categories")
        model = Product

    # Field mappings for serialization
    id = ma.auto_field()
    product_name = ma.auto_field()
    price = ma.auto_field()
    is_promo = ma.auto_field()
    promo_price = ma.auto_field()
    categories = fields.Nested(ProductCategorySchema, many=True)
