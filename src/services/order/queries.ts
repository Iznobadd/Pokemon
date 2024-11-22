import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getTotalOrders } from "./api";

export function useTotalOrders() {
  return useQuery<number, AxiosError>({
    queryKey: ["total-orders"],
    queryFn: getTotalOrders,
  });
}
