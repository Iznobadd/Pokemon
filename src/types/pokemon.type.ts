export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front?: string;
    back?: string;
  };
  generation: string[];
  types: string[];
}
