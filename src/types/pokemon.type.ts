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

export interface FindParams {
  name?: string;
  generation?: string;
  limit?: number;
  offset?: number;
}
