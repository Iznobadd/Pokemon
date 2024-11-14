import { LoginData } from "../../types/auth.type";
import apiClient from "../../utils/apiClient";

export const login = async (data: LoginData) => {
  return await apiClient.post("/auth/login", data);
};
