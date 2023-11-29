import { Wrapper } from "@components/organisms";
import { ProductImageProps } from "./types";
import Image from "next/image";

import "./ProductImage.scss";

export function ProductImage(props: ProductImageProps) {
  const { images, alt } = props;
  const arrayOfImages = images.replaceAll("[", "").replaceAll("]", "").replaceAll("'", "").split(",");
  return (
    <Wrapper className="product-image">
      <Image className="featured-image" src={"https://random.imagecdn.app/290/255"} width={290} height={255} alt={alt} />
      <Image className="featured-image" src={"https://picsum.photos/290/255"} width={290} height={255} alt={alt} />
    </Wrapper>
  )
}
//<Image className="featured-image" src={arrayOfImages[0]} width={290} height={255} alt="Product" />
//<Image className="featured-image" src={arrayOfImages[1]} width={290} height={255} alt="Product" />