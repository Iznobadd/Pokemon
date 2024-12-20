import { ChangePasswordDto, User } from "../../types/user.type";
import apiClient from "../../utils/apiClient";

export const getTotalUsers = async () => {
  const response = await apiClient.get<number>("/users/total");
  return response.data;
};

export const getAllUsers = async () => {
  const response = await apiClient.get<User[]>("/users/all");
  return response.data;
};

export const changePassword = async (data: ChangePasswordDto) => {
  const response = await apiClient.post<User>("/users/change-password", data);
  return response.data;
};

export const deleteMyAccount = async () => {
  const response = await apiClient.delete<User>("/users/delete-account");
  return response.data;
};

export const deleteUser = async (id: string) => {
  const response = await apiClient.delete<User>(`/users/delete/${id}`);
  return response.data;
};
