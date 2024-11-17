import { FindParams, Pokemon } from "../../types/pokemon.type";
import apiClient from "../../utils/apiClient";

export const find = async (params: FindParams) => {
  const cleanParams = Object.fromEntries(
    Object.entries(params).filter(([_, value]) => value !== undefined)
  );

  const response = await apiClient.get<Pokemon[]>("/pokemons", {
    params: cleanParams,
  });
  return response.data;
};
