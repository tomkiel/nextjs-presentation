import { ProductCard, Wrapper } from "@components/organisms";
import { ProductGridProps } from "./types";
import "./ProductGrid.scss";

export function ProductGrid(props: ProductGridProps) {
  const { products } = props;
  return (
    <Wrapper className="product-grid">
      {products.map((product, index) => {
        const { id, product_name, description, categories, promo_price, is_promo, price } = product;
        return <ProductCard
          id={id}
          productName={product_name}
          description={description}
          categories={categories}
          promoPrice={promo_price}
          isPromo={is_promo}
          price={price}
          key={index} />
      })}
    </Wrapper>
  )
}