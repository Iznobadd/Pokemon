export interface ProductData {
  name: string;
  generation: string;
  image: string;
  price: number;
  quantity: number;
}

export interface CheckoutSessionResponse {
  id: string;
}

export interface CheckoutSessionRequest {
  products: ProductData[];
  deliveryMethod: string;
  deliveryDetails: string;
}
