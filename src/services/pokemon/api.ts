import axios from "axios";

export const getVioletScarletPokemons = async () => {
  return await axios.get("https://pokeapi.co/api/v2/pokedex/31/");
};
