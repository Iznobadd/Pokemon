import { useMutation } from "@tanstack/react-query";
import {
  CheckoutSessionResponse,
  ProductData,
} from "../../types/products.type";
import { AxiosError } from "axios";
import { createCheckoutSession } from "./api";

export function useCheckoutSession() {
  return useMutation<CheckoutSessionResponse, AxiosError, ProductData[]>({
    mutationFn: (data) => createCheckoutSession(data),
    onError: (error) => {
      console.error(error);
    },
  });
}
