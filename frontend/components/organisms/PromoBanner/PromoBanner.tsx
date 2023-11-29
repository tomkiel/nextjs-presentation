import Image from "next/image";
import { PromoBannerProps } from "./types";
import "./PromoBanner.scss";

export function PromoBanner(props: PromoBannerProps) {
  const { id, imageUrl, title, description } = props;

  return (
    <div id={id} className="hero">
      <Image
        src={imageUrl}
        alt="Promotional Image"
        className="hero-image"
        width={"1200"}
        height={"480"}
        sizes="(min-width: 1360px) 100vw, (max-width: 1360px) 70vw, (max-width: 768px) 50vw" />
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}