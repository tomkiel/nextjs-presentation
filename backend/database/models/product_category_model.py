from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from backend.vendors.database import db
from backend.vendors.marshmallow import ma

Base = declarative_base()


class ProductCategory(db.Model, Base):
    __tablename__ = 'product_categories'

    id = db.Column(UUID(as_uuid=True), primary_key=True,
                   server_default='gen_random_uuid()', unique=True, nullable=False)
    category_name = db.Column(db.String(255), nullable=False)

    def __init__(self, id, category_name):
        self.id = id
        self.category_name = category_name


class ProductCategorySchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        fields = ("id", "category_name")
        model = ProductCategory

    id = ma.auto_field()
    category_name = ma.auto_field()
