import { Heading } from "@components/atoms/Heading/Heading";
import { ProductCardProps } from "./types";
import { Wrapper } from "@components/organisms";
import { TextFormatter } from "@components/atoms/TextFormatter/TextFormatter";
import { Anchor } from "@components/atoms/Anchor/Anchor";
import { ProductHover, ProductImage, ProductSoldOut } from "./components";
import "./ProductCard.scss";

export function ProductCard(props: ProductCardProps) {
  const { images, product_name, is_promo, price, promo_price, categories } = props;
  return (
    <Wrapper className={`product-card ${is_promo ? 'sold-out' : ''}`}>
      <Anchor href="#">
        <Wrapper className="card-wrapper">
          <Wrapper className="card-media">
            <ProductImage images={images} alt={product_name}/>
            <ProductHover />
          </Wrapper>
          <Wrapper className="card-content">
            <Heading level={2} className="card-title">
              {product_name}
            </Heading>
            <TextFormatter>
              Example of description
            </TextFormatter>
            <div className="card-rating">Rating: 5 stars</div>
            <Wrapper className="card-price">
              ${Number(price).toFixed(2)}
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Anchor>
    </Wrapper>
  )
}