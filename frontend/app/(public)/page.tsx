import { Heading } from "@components/atoms";
import { PromoBanner, Wrapper } from "@components/organisms";
import { CategoryList } from "@components/organisms/CategoryList/CategoryList";
import { ProductGrid } from "@components/organisms/ProductGrid/ProductGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'My Store - Home page',
  description: 'Generated by create next app',
}

export default async function HomePage() {
  const response = await fetch(process.env.API_URL + "/products/");
  const { products } = await response.json();

  return (
    <Wrapper className="home-page">
      <PromoBanner imageUrl="/banner.jpg" title="Promo Banner" description="A description example" />
      <Wrapper className="products-categories">
        <CategoryList />
      </Wrapper>
      <Wrapper className="products">
        <Wrapper className="content-header">
          <Heading level={2}>FEATURED PRODUCT</Heading>
        </Wrapper>
        <Wrapper className="products-list">
          <ProductGrid products={products} />
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
}