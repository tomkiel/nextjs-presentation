CREATE TABLE product_category_rel (
  product_id UUID REFERENCES products(id),
  category_id UUID REFERENCES product_categories(id),
  PRIMARY KEY (product_id, category_id)
);