import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ChangePasswordDto, User } from "../../types/user.type";
import { changePassword, deleteMyAccount, deleteUser } from "./api";

export function useChangePassword() {
  return useMutation<User, AxiosError, ChangePasswordDto>({
    mutationFn: (data) => changePassword(data),
    onError: (error) => {
      console.error(error);
    },
  });
}

export function useDeleteMyAccount() {
  return useMutation<User, AxiosError, void>({
    mutationFn: () => deleteMyAccount(),
    onError: (error) => {
      console.error(error);
    },
  });
}

export function useDeleteUser() {
  const queryClient = useQueryClient();
  return useMutation<User, AxiosError, string>({
    mutationFn: (id) => deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-users"] });
    },
    onError: (error) => {
      console.error(error);
    },
  });
}
