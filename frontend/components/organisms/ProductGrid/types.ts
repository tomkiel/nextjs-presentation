export interface ProductGridProps {
  products: {
    imageUrl: string;
    title: string;
    description: string;
    stars: number;
    price: number;
    soldOut?: boolean;
  }[];
}