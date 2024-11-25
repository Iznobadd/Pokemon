import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getAllUsers, getTotalUsers } from "./api";
import { User } from "../../types/user.type";

export function useTotalUsers() {
  return useQuery<number, AxiosError>({
    queryKey: ["total-users"],
    queryFn: getTotalUsers,
  });
}

export function useAllUsers() {
  return useQuery<User[], AxiosError>({
    queryKey: ["all-users"],
    queryFn: getAllUsers,
  });
}
