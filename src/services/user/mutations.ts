import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ChangePasswordDto, User } from "../../types/user.type";
import { changePassword } from "./api";

export function useChangePassword() {
  return useMutation<User, AxiosError, ChangePasswordDto>({
    mutationFn: (data) => changePassword(data),
    onError: (error) => {
      console.error(error);
    },
  });
}
