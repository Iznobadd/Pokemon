import { ProductData } from "./products.type";

export interface Order {
  _id: string;
  stripeOrderId: string;
  user: string;
  totalAmount: number;
  currency: string;
  status: string;
  products: ProductData[];
  deliveryMethod: string;
  deliveryDetails: string;
  completedAt: Date;
  createdAt: Date;
}

export interface OrderParams {
  limit?: number;
}
