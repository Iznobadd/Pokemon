import { LoginData, LoginResponse } from "../../types/auth.type";
import apiClient from "../../utils/apiClient";

export const login = async (data: LoginData) => {
  const response = await apiClient.post<LoginResponse>("/auth/login", data);
  return response.data;
};
