import { useQuery } from "@tanstack/react-query";
import { getVioletScarletPokemons } from "./api";

export function useVioletScarletPokemons() {
  return useQuery({
    queryKey: ["all_violet"],
    queryFn: getVioletScarletPokemons,
  });
}
