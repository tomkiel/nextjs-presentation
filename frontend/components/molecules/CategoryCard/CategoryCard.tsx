import { Wrapper } from "@components/organisms";
import { CategoryCardProps } from "./types";
import { Anchor } from "@components/atoms/Anchor/Anchor";

export function CategoryCard(props: CategoryCardProps) {
  const { id, imageUrl, title, link } = props;
  return (
    <Wrapper id={id} className="category-card">
      <Anchor href={link} className="card-heading">
        <img src={imageUrl} alt={title} className="card-image" />
        {title}
      </Anchor>
    </Wrapper>
  );
}