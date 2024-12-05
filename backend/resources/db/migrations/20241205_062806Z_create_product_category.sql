CREATE TABLE "product_category" (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_name VARCHAR(255) NOT NULL
);