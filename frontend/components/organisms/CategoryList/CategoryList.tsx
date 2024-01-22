"use client"

import useSWR from 'swr';
import { CategoryCard } from "@components/molecules";
import { Wrapper } from "@components/organisms";

const fetcher = (...args: any) => fetch(args).then(res => res.json());

export function CategoryList() {
  const { data, error, isLoading } = useSWR('http://backend.localhost/categories/', fetcher)

  if (error) return <Wrapper>Failed to load</Wrapper>
  if (isLoading) return <div>loading...</div>
  
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