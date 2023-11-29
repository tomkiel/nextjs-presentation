export interface ProductCardProps {
  id?: string;
  images: string;
  categories: string;
  product_name: string;
  promo_price: string;
  price: string;
  is_promo: boolean;
  soldOut?: boolean;
}