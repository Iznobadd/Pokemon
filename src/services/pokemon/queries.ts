import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { find } from "./api";
import { FindParams, Pokemon } from "../../types/pokemon.type";
import { AxiosError } from "axios";

export function useFind(
  params: FindParams
): UseQueryResult<Pokemon[], AxiosError> {
  return useQuery<Pokemon[], AxiosError>({
    queryKey: ["pokemons", params],
    queryFn: () => find(params),
  });
}
