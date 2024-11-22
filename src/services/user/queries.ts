import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getTotalUsers } from "./api";

export function useTotalUsers() {
  return useQuery<number, AxiosError>({
    queryKey: ["total-users"],
    queryFn: getTotalUsers,
  });
}
