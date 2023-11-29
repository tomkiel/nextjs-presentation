import { Anchor } from "@components/atoms/Anchor/Anchor";
import { Wrapper } from "@components/organisms";
import { IconHeart, IconShoppingBag } from "@tabler/icons-react";
import "./ProductHover.scss";

export function ProductHover() {
  return (
    <Wrapper className="product-hover">
      <Anchor className="product-hover-item" href="#" title="Whishlist">
        <IconHeart />
      </Anchor>
      <Anchor className="product-hover-item" href="#" title="Quick Add">
        <IconShoppingBag />
      </Anchor>
    </Wrapper>
  )
}