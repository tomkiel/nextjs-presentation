export interface ProductCardProps {
  id?: string;
  categories: string;
  productName: string;
  description: string;
  promoPrice: string;
  price: string;
  isPromo: boolean;
  soldOut?: boolean;
}