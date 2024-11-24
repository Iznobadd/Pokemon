import {
  CheckoutSessionRequest,
  CheckoutSessionResponse,
} from "../../types/products.type";
import apiClient from "../../utils/apiClient";

export const createCheckoutSession = async (data: CheckoutSessionRequest) => {
  const response = await apiClient.post<CheckoutSessionResponse>(
    "/payment/create-checkout-session",
    data
  );
  return response.data;
};

export const getTotalProfit = async () => {
  const response = await apiClient.get<number>("/payment/all");
  return response.data;
};

export const getAverageOrderValue = async () => {
  const response = await apiClient.get<number>("/payment/average");
  return response.data;
};
