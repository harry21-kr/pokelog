import PokemonDetail from "@/components/DetailPage/PokemonDetail";
import { getPokemonById } from "@/utils/api/api";

const DetailPage = async ({ params }: { params: { id: string } }) => {
  const initialPokemon = await getPokemonById(params.id);
  return <PokemonDetail pokemon={initialPokemon} />;
};

export default DetailPage;
