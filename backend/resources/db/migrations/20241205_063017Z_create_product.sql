CREATE TABLE "product" (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_name VARCHAR(255) NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  is_promo BOOLEAN NOT NULL,
  promo_price NUMERIC(10, 2),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE "product_category_rel" (
  product_id UUID NOT NULL,
  category_id UUID NOT NULL,
  PRIMARY KEY (product_id, category_id),
  FOREIGN KEY (product_id) REFERENCES "product" (id) ON DELETE CASCADE,
  FOREIGN KEY (category_id) REFERENCES "product_category" (id) ON DELETE CASCADE
);