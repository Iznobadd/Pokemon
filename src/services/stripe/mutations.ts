import { useMutation } from "@tanstack/react-query";
import {
  CheckoutSessionRequest,
  CheckoutSessionResponse,
} from "../../types/products.type";
import { AxiosError } from "axios";
import { createCheckoutSession } from "./api";

export function useCheckoutSession() {
  return useMutation<
    CheckoutSessionResponse,
    AxiosError,
    CheckoutSessionRequest
  >({
    mutationFn: (data) => createCheckoutSession(data),
    onError: (error) => {
      console.error(error);
    },
  });
}
