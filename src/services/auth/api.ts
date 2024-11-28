import { LoginData, LoginResponse, RegisterData } from "../../types/auth.type";
import apiClient from "../../utils/apiClient";

export const login = async (data: LoginData) => {
  const response = await apiClient.post<LoginResponse>("/auth/login", data);
  return response.data;
};

export const register = async (data: RegisterData) => {
  const response = await apiClient.post("/auth/register", data);
  return response.data;
};
