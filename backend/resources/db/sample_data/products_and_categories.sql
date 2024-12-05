-- Insert sample data into product_categories
INSERT INTO product_category (id, category_name) VALUES
    ('238141f4-30ed-49c5-b95a-d7cda4f97ca1', 'Men'),
    ('f0d6f479-ec72-4ac9-9c83-ac4fc60c6d02', 'Women'),
    ('abcb198c-a683-46b5-9e6f-806a837fe603', 'Kids'),
    ('f19d8d39-74bf-4ac5-928a-5913901a77ff', 'Accessories'),
    ('0bf3aeec-ba68-4c7d-ba2c-7d6922eb18e7', 'Shoes');

-- Retrieve the inserted category IDs for reference
SELECT * FROM product_category;

-- Insert additional sample products
INSERT INTO public.product (id, product_name, price, is_promo, promo_price, created_at, updated_at) VALUES
    -- Men
    (gen_random_uuid(), 'Slim Fit Jeans', 49.99, FALSE, NULL, now(), now()),
    (gen_random_uuid(), 'Formal Suit', 199.99, TRUE, 179.99, now(), now()),
    (gen_random_uuid(), 'Casual Polo Shirt', 29.99, FALSE, NULL, now(), now()),
    (gen_random_uuid(), 'Winter Jacket', 99.99, TRUE, 89.99, now(), now()),
    -- Women
    (gen_random_uuid(), 'Floral Maxi Dress', 59.99, FALSE, NULL, now(), now()),
    (gen_random_uuid(), 'Leather Handbag', 79.99, TRUE, 69.99, now(), now()),
    (gen_random_uuid(), 'High-Waist Trousers', 44.99, FALSE, NULL, now(), now()),
    (gen_random_uuid(), 'Cashmere Sweater', 89.99, TRUE, 79.99, now(), now()),
    -- Kids
    (gen_random_uuid(), 'Graphic T-Shirt', 14.99, FALSE, NULL, now(), now()),
    (gen_random_uuid(), 'Denim Overalls', 34.99, TRUE, 29.99, now(), now()),
    (gen_random_uuid(), 'Warm Hoodie', 24.99, FALSE, NULL, now(), now()),
    (gen_random_uuid(), 'Raincoat', 39.99, TRUE, 34.99, now(), now()),
    -- Accessories
    (gen_random_uuid(), 'Wristwatch', 129.99, FALSE, NULL, now(), now()),
    (gen_random_uuid(), 'Stud Earrings', 19.99, TRUE, 14.99, now(), now()),
    (gen_random_uuid(), 'Travel Backpack', 49.99, FALSE, NULL, now(), now()),
    (gen_random_uuid(), 'Knitted Gloves', 12.99, TRUE, 9.99, now(), now()),
    -- Shoes
    (gen_random_uuid(), 'Running Shoes', 69.99, TRUE, 59.99, now(), now()),
    (gen_random_uuid(), 'High Heels', 89.99, FALSE, NULL, now(), now()),
    (gen_random_uuid(), 'Flip Flops', 14.99, FALSE, NULL, now(), now()),
    (gen_random_uuid(), 'Winter Boots', 99.99, TRUE, 89.99, now(), now());

-- Insert relationships into product_category_rel
INSERT INTO product_category_rel (product_id, category_id) VALUES
    -- Men
    ((SELECT id FROM public.product WHERE product_name = 'Slim Fit Jeans'), '238141f4-30ed-49c5-b95a-d7cda4f97ca1'),
    ((SELECT id FROM public.product WHERE product_name = 'Formal Suit'), '238141f4-30ed-49c5-b95a-d7cda4f97ca1'),
    ((SELECT id FROM public.product WHERE product_name = 'Casual Polo Shirt'), '238141f4-30ed-49c5-b95a-d7cda4f97ca1'),
    ((SELECT id FROM public.product WHERE product_name = 'Winter Jacket'), '238141f4-30ed-49c5-b95a-d7cda4f97ca1'),
    -- Women
    ((SELECT id FROM public.product WHERE product_name = 'Floral Maxi Dress'), 'f0d6f479-ec72-4ac9-9c83-ac4fc60c6d02'),
    ((SELECT id FROM public.product WHERE product_name = 'Leather Handbag'), 'f0d6f479-ec72-4ac9-9c83-ac4fc60c6d02'),
    ((SELECT id FROM public.product WHERE product_name = 'High-Waist Trousers'), 'f0d6f479-ec72-4ac9-9c83-ac4fc60c6d02'),
    ((SELECT id FROM public.product WHERE product_name = 'Cashmere Sweater'), 'f0d6f479-ec72-4ac9-9c83-ac4fc60c6d02'),
    -- Kids
    ((SELECT id FROM public.product WHERE product_name = 'Graphic T-Shirt'), 'abcb198c-a683-46b5-9e6f-806a837fe603'),
    ((SELECT id FROM public.product WHERE product_name = 'Denim Overalls'), 'abcb198c-a683-46b5-9e6f-806a837fe603'),
    ((SELECT id FROM public.product WHERE product_name = 'Warm Hoodie'), 'abcb198c-a683-46b5-9e6f-806a837fe603'),
    ((SELECT id FROM public.product WHERE product_name = 'Raincoat'), 'abcb198c-a683-46b5-9e6f-806a837fe603'),
    -- Accessories
    ((SELECT id FROM public.product WHERE product_name = 'Wristwatch'), 'f19d8d39-74bf-4ac5-928a-5913901a77ff'),
    ((SELECT id FROM public.product WHERE product_name = 'Stud Earrings'), 'f19d8d39-74bf-4ac5-928a-5913901a77ff'),
    ((SELECT id FROM public.product WHERE product_name = 'Travel Backpack'), 'f19d8d39-74bf-4ac5-928a-5913901a77ff'),
    ((SELECT id FROM public.product WHERE product_name = 'Knitted Gloves'), 'f19d8d39-74bf-4ac5-928a-5913901a77ff'),
    -- Shoes
    ((SELECT id FROM public.product WHERE product_name = 'Running Shoes'), '0bf3aeec-ba68-4c7d-ba2c-7d6922eb18e7'),
    ((SELECT id FROM public.product WHERE product_name = 'High Heels'), '0bf3aeec-ba68-4c7d-ba2c-7d6922eb18e7'),
    ((SELECT id FROM public.product WHERE product_name = 'Flip Flops'), '0bf3aeec-ba68-4c7d-ba2c-7d6922eb18e7'),
    ((SELECT id FROM public.product WHERE product_name = 'Winter Boots'), '0bf3aeec-ba68-4c7d-ba2c-7d6922eb18e7');
