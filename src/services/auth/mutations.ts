import { useMutation } from "@tanstack/react-query";
import { LoginData } from "../../types/auth.type";
import { login } from "./api";

export function useLogin() {
  return useMutation({
    mutationFn: (data: LoginData) => login(data),
    onSuccess: () => {
      console.log("Login success");
    },
  });
}
