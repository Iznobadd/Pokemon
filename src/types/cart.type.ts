import { Pokemon } from "./pokemon.type";

export type CartItem = {
  pokemon: Pokemon;
  generation: string;
  shiny: boolean;
};
