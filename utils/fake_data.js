const { faker } = require('@faker-js/faker');
const fs = require('fs');

function generateClothesItem() {
  const isPromo = faker.datatype.boolean();
  const promoPrice = isPromo ? faker.number.float({ min: 10, max: 100, precision: 0.01 }) : null;

  return {
    id: faker.string.uuid(),
    product_name: faker.commerce.productName(),
    images: [faker.image.fashion(230, 310, true), faker.image.fashion(230, 310, true)],
    price: faker.number.float({ min: 10, max: 200, precision: 0.01 }),
    categories: [faker.commerce.department(), faker.commerce.department()],
    is_promo: isPromo,
    promo_price: promoPrice,
  };
}

const clothesItems = Array.from({ length: 100 }, generateClothesItem);

const sqlStatements = clothesItems.map(item => `
  INSERT INTO products (id, product_name, images, price, categories, is_promo, promo_price)
  VALUES (
      '${item.id}',
      '${item.product_name}',
      '{${item.images.join(',')}}',
      ${item.price},
      '{${item.categories.join(',')}}',
      ${item.is_promo},
      ${item.promo_price === null ? 'NULL' : item.promo_price}
  );
`);

const sqlContent = sqlStatements.join('\n');

fs.writeFileSync('insert_fake_data.sql', sqlContent);

console.log('SQL file generated: insert_fake_data.sql');
