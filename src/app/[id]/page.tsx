import PokemonDetail from "@/components/DetailPage/PokemonDetail";
import { getPokemonDetailInfoById } from "@/utils/api/api";

const DetailPage = async ({ params }: { params: { id: string } }) => {
  const pokemonDetailInfo = await getPokemonDetailInfoById(params.id);
  return <PokemonDetail pokemon={pokemonDetailInfo} />;
};

export default DetailPage;
