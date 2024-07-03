import PokemonList from "@/components/HomePage/PokemonList/PokemonList";
import { getPokemonList } from "@/utils/api/api";

const HomePage = async () => {
  const initialPokemonList = await getPokemonList();
  return <PokemonList initialPokemonList={initialPokemonList} />;
};

export default HomePage;
