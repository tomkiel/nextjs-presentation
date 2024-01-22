import { Heading } from "@components/atoms/Heading/Heading";
import { ProductCardProps } from "./types";
import { Wrapper } from "@components/organisms";
import { TextFormatter } from "@components/atoms/TextFormatter/TextFormatter";
import { Anchor } from "@components/atoms/Anchor/Anchor";
import { ProductHover, ProductImage, ProductSoldOut } from "./components";
import "./ProductCard.scss";

export function ProductCard(props: ProductCardProps) {
  const { productName, isPromo, price, promoPrice, categories, id, description } = props;
  const images = {
    "primary": `${process.env.API_URL}/static/images/products/${id}/primary.jpg`,
    "alt": `${process.env.API_URL}/static/images/products/${id}/alt.jpg`
  }
  return (
    <Wrapper className={`product-card ${isPromo ? 'sold-out' : ''}`}>
      <Anchor href="#">
        <Wrapper className="card-wrapper">
          <Wrapper className="card-media">
            <ProductImage images={images} alt={productName} />
            <ProductHover />
          </Wrapper>
          <Wrapper className="card-content">
            <Heading level={2} className="card-title">
              {productName}
            </Heading>
            <TextFormatter>
              {description}
            </TextFormatter>
            <div className="card-rating">Rating: 5 stars</div>
            <Wrapper className="card-price">
              ${Number(price).toFixed(2)}{isPromo ? ` - $${Number(promoPrice).toFixed(2)}` : ""}
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Anchor>
    </Wrapper>
  )
}