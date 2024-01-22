import { Anchor } from "@components/atoms/Anchor/Anchor";
import { Wrapper } from "@components/organisms";
import { IconHeart, IconShoppingBag } from "@tabler/icons-react";
import "./ProductHover.scss";

export function ProductHover() {
  return (
    <Wrapper className="product-hover">
      <div className="product-hover-item" title="Whishlist">
        <IconHeart />
      </div>
      <div className="product-hover-item" title="Quick Add">
        <IconShoppingBag />
      </div>
    </Wrapper>
  )
}