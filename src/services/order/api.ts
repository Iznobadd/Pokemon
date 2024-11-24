import { Order } from "../../types/order.type";
import apiClient from "../../utils/apiClient";

export const getTotalOrders = async () => {
  const response = await apiClient.get<number>("/orders/total");
  return response.data;
};

export const getOrders = async () => {
  const response = await apiClient.get<Order[]>("/orders/all");
  return response.data;
};

export const confirmOrder = async (id: string) => {
  const response = await apiClient.post<Order>("/orders/edit/status", { id });
  return response.data;
};
