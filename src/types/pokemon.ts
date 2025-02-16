type PokemonRawData = {
  count: string;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

type PokemonData = { results: Pokemon[] } & Omit<PokemonRawData, "results">;

type Pokemon = {
  id: number;
  name: string;
  korean_name: string;
  korean_flavor_text: string;
  height: number;
  weight: number;
  sprites: { front_default: string };
  types: {
    type: { name: keyof PokemonType; korean_name: string };
  }[];
  abilities: { ability: { name: string; korean_name: string } }[];
  moves: { move: { name: string; korean_name: string } }[];
};

type PokemonType = {
  normal: "#A8A77A";
  fire: "#EE8130";
  water: "#6390F0";
  electric: "#F7D02C";
  grass: "#7AC74C";
  ice: "#96D9D6";
  fighting: "#C22E28";
  poison: "#A33EA1";
  ground: "#E2BF65";
  flying: "#A98FF3";
  psychic: "#F95587";
  bug: "#A6B91A";
  rock: "#B6A136";
  ghost: "#735797";
  dragon: "#6F35FC";
  dark: "#705746";
  steel: "#B7B7CE";
  fairy: "#D685AD";
};
