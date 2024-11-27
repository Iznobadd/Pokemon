import { Order, OrderParams } from "../../types/order.type";
import apiClient from "../../utils/apiClient";

export const getTotalOrders = async () => {
  const response = await apiClient.get<number>("/orders/total");
  return response.data;
};

export const getOrders = async (params: OrderParams) => {
  const response = await apiClient.get<Order[]>("/orders/all", {
    params,
  });
  return response.data;
};

export const myOrders = async () => {
  const response = await apiClient.get<Order[]>("/orders/me");
  return response.data;
};

export const confirmOrder = async (id: string) => {
  const response = await apiClient.post<Order>("/orders/edit/status", { id });
  return response.data;
};
