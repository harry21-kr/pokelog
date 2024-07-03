import axios, { AxiosResponse } from "axios";

export async function getPokemonList() {
  const res: AxiosResponse<Pokemon[]> = await axios.get(
    "http://localhost:3000/api/pokemons"
  );
  return res.data;
}

export async function getPokemonById(id: string) {
  const res: AxiosResponse<Pokemon> = await axios.get(
    `http://localhost:3000/api/pokemons/${id}`
  );
  return res.data;
}
