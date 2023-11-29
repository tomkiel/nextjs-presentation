import { CategoryCard } from "@components/molecules";
import { Wrapper } from "@components/organisms";

export function CategoryList() {
  return (
    <Wrapper className="category-list">
      <CategoryCard
        imageUrl="/images/category1.jpg"
        title="Women Bags"
        link="#"
      />
      <CategoryCard
        imageUrl="/images/category2.jpg"
        title="Sneaker Shoes"
        link="#"
      />
      <CategoryCard
        imageUrl="/images/category3.jpg"
        title="Women Clothes"
        link="#"
      />
      <CategoryCard
        imageUrl="/images/category4.jpg"
        title="Men Clothes"
        link="#"
      />
    </Wrapper>
  )
}