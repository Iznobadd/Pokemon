import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getTotalProfit } from "./api";

export function useTotalProfit() {
  return useQuery<number, AxiosError>({
    queryKey: ["total-profit"],
    queryFn: getTotalProfit,
  });
}
