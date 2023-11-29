import { ProductCard, Wrapper } from "@components/organisms";
import { ProductGridProps } from "./types";
import "./ProductGrid.scss";

export function ProductGrid(props: ProductGridProps) {
  const { products } = props;
  return (
    <Wrapper className="product-grid">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </Wrapper>
  )
}