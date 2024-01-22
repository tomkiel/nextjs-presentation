export interface ProductGridProps {
  products: {
    id: string;
    product_name: string;
    description: string;
    is_promo: boolean;
    promo_price: string;
    categories: any;
    stars: number;
    price: string;
    soldOut?: boolean;
  }[];
}