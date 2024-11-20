import {
  CheckoutSessionResponse,
  ProductData,
} from "../../types/products.type";
import apiClient from "../../utils/apiClient";

export const createCheckoutSession = async (data: ProductData[]) => {
  const response = await apiClient.post<CheckoutSessionResponse>(
    "/payment/create-checkout-session",
    data
  );
  return response.data;
};
