import apiClient from "../../utils/apiClient";

export const getTotalOrders = async () => {
  const response = await apiClient.get<number>("/orders/total");
  return response.data;
};
