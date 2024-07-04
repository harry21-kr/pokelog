import PokemonList from "@/components/HomePage/PokemonList/PokemonList";
import { getPokemonInfoList } from "@/utils/api/api";

const HomePage = async () => {
  const initialPokemonData = await getPokemonInfoList("0");
  return <PokemonList initialPokemonData={initialPokemonData} />;
};

export default HomePage;
