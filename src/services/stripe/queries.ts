import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getAverageOrderValue, getTotalProfit } from "./api";

export function useTotalProfit() {
  return useQuery<number, AxiosError>({
    queryKey: ["total-profit"],
    queryFn: getTotalProfit,
  });
}

export function useAverageOrderValue() {
  return useQuery<number, AxiosError>({
    queryKey: ["average-order-value"],
    queryFn: getAverageOrderValue,
  });
}
