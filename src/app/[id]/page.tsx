import PokemonDetail from "@/components/DetailPage/PokemonDetail";
import axios, { AxiosResponse } from "axios";

export async function getPokemonById(id: string) {
  const res: AxiosResponse<Pokemon> = await axios.get(
    `http://localhost:3000/api/pokemons/${id}`
  );
  return res.data;
}

const DetailPage = async ({ params }: { params: { id: string } }) => {
  const initialPokemon = await getPokemonById(params.id);
  return <PokemonDetail pokemon={initialPokemon} />;
};

export default DetailPage;
