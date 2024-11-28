import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ChangePasswordDto, User } from "../../types/user.type";
import { changePassword, deleteMyAccount } from "./api";

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
