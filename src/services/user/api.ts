import apiClient from "../../utils/apiClient";

export const getTotalUsers = async () => {
  const response = await apiClient.get<number>("/users/total");
  return response.data;
};
