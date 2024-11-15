import { useQuery } from "@tanstack/react-query";
import { findAllScarletViolet } from "./api";
import { Pokemon } from "../../types/pokemon.type";
import { AxiosError } from "axios";

export function useFindAllScarletViolet() {
  return useQuery<Pokemon[], AxiosError>({
    queryKey: ["pokemon/scarlet-violet"],
    queryFn: findAllScarletViolet,
  });
}
