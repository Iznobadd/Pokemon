import { useMutation } from "@tanstack/react-query";
import { LoginData, LoginResponse, RegisterData } from "../../types/auth.type";
import { login, register } from "./api";
import { AxiosError } from "axios";
import { useAuth } from "../../context/useAuth";

export function useLogin() {
  const auth = useAuth();
  return useMutation<LoginResponse, AxiosError, LoginData>({
    mutationFn: (data) => login(data),
    onSuccess: (data) => {
      auth.login(data.access_token);
    },
  });
}

export function useRegister() {
  const auth = useAuth();
  return useMutation<LoginResponse, AxiosError, RegisterData>({
    mutationFn: (data) => register(data),
    onSuccess: (data) => {
      auth.login(data.access_token);
    },
  });
}
