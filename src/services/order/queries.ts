import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getOrders, getTotalOrders, myOrders } from "./api";
import { Order, OrderParams } from "../../types/order.type";

export function useTotalOrders() {
  return useQuery<number, AxiosError>({
    queryKey: ["total-orders"],
    queryFn: getTotalOrders,
  });
}

export function useAllOrders(params: OrderParams) {
  return useQuery<Order[], AxiosError>({
    queryKey: ["all-orders"],
    queryFn: () => getOrders(params),
  });
}

export function useMyOrders() {
  return useQuery<Order[], AxiosError>({
    queryKey: ["my-orders"],
    queryFn: () => myOrders(),
  });
}
