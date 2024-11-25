import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getOrders, getTotalOrders } from "./api";
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
