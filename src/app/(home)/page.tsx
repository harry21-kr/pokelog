import PokemonList from "@/components/PokemonList/PokemonList";
import axios, { AxiosResponse } from "axios";

async function getPokemonList() {
  const res: AxiosResponse<Pokemon[]> = await axios.get(
    "http://localhost:3000/api/pokemons"
  );
  return res.data;
}

const HomePage = async () => {
  const initialPokemonList = await getPokemonList();

  return <PokemonList initialPokemonList={initialPokemonList} />;
};

export default HomePage;
