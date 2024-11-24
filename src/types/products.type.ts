export interface ProductData {
  name: string;
  generation: string;
  image: string;
  price: number;
  quantity: number;
  shiny: boolean;
}

export interface CheckoutSessionResponse {
  id: string;
}

export interface CheckoutSessionRequest {
  products: ProductData[];
  deliveryMethod: string;
  deliveryDetails: string;
}
