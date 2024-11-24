import { useMutation, useQueryClient } from "@tanstack/react-query";
import { confirmOrder } from "./api";
import { Order } from "../../types/order.type";
import { AxiosError } from "axios";

export function useConfirmOrder() {
  const queryClient = useQueryClient();
  return useMutation<Order, AxiosError, string>({
    mutationFn: (data) => confirmOrder(data),
    onSuccess: (updatedOrder) => {
      queryClient.setQueryData(
        ["all-orders"],
        (oldOrders: Order[] | undefined) => {
          if (!oldOrders) return [];
          return oldOrders.map((order) => {
            if (order._id === updatedOrder._id) {
              return updatedOrder;
            }
            return order;
          });
        }
      );
    },
  });
}
