import { Wrapper } from "@components/organisms";
import { ProductImageProps } from "./types";
import Image from "next/image";

import "./ProductImage.scss";

export function ProductImage(props: any) {
  const { images, alt } = props;
  return (
    <Wrapper className="product-image">
      <Image className="featured-image" src={images.primary} width={290} height={255} alt={alt} />
      <Image className="featured-image" src={images.alt} width={290} height={255} alt={alt} />
    </Wrapper>
  )
}
