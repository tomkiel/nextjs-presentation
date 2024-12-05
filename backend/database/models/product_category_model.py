from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from backend.vendors.database import db
from backend.vendors.marshmallow import ma
import uuid

# Base class for all database models
Base = declarative_base()


class ProductCategory(db.Model, Base):
    """
    Represents a product category in the database.

    Attributes:
        id (UUID): Unique identifier for the category.
        category_name (str): Name of the product category.
    """

    __tablename__ = 'product_category'
    _table_args__ = ({'schema': 'public'})

    # Unique identifier for each product category
    id = db.Column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4,
        unique=True,
        nullable=False
    )

    # The name of the product category
    category_name = db.Column(db.String(255), nullable=False)

    def __init__(self, category_name, id=None):
        """
        Initialize a ProductCategory instance.

        Args:
            category_name (str): The name of the category.
            id (UUID, optional): The unique identifier for the category. If not provided, 
                                 a new UUID will be generated.
        """
        # Ensure that the ID is only set if it is provided
        self.id = id or uuid.uuid4()
        self.category_name = category_name

    def __repr__(self):
        """Return a string representation of the ProductCategory."""
        return f"<ProductCategory(id={self.id}, category_name={self.category_name})>"


class ProductCategorySchema(ma.SQLAlchemyAutoSchema):
    """
    Marshmallow schema for serializing and deserializing ProductCategory instances.

    Attributes:
        id (UUID): The unique identifier for the category.
        category_name (str): The name of the product category.
    """

    class Meta:
        # Fields to include in the serialized output
        fields = ("id", "category_name")
        model = ProductCategory

    # Automatically maps fields to the model attributes
    id = ma.auto_field()
    category_name = ma.auto_field()
