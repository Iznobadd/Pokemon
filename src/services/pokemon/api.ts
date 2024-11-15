import { Pokemon } from "../../types/pokemon.type";
import apiClient from "../../utils/apiClient";

export const findAllScarletViolet = async () => {
  const response = await apiClient.get<Pokemon[]>("/pokemon/scarlet-violet");
  return response.data;
};
