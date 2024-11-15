import { useMutation } from "@tanstack/react-query";
import { LoginData, LoginResponse } from "../../types/auth.type";
import { login } from "./api";
import { AxiosError } from "axios";
import { useAuth } from "../../context/useAuth";

export function useLogin() {
  const auth = useAuth();
  return useMutation<LoginResponse, AxiosError, LoginData>({
    mutationFn: (data) => login(data),
    onSuccess: (data) => {
      console.log(data);
      auth.login(data.access_token);
    },
  });
}
