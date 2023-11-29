import { Heading } from "@components/atoms";
import { PromoBanner, Wrapper } from "@components/organisms";
import { ProductGrid } from "@components/organisms/ProductGrid/ProductGrid";

export default async function HomePage() {
  const response = await fetch(process.env.API_URL + "/api/products/");
  const { products } = await response.json();

  return (
    <Wrapper className="home-page">
      <PromoBanner imageUrl="/banner.jpg" title="Promo Banner" description="A description example" />
      <Wrapper className="products">
        <Wrapper className="content-header">
          <Heading level={2}>Our Products</Heading>
        </Wrapper>
        <Wrapper className="products-list">
          <ProductGrid products={products} />
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
}