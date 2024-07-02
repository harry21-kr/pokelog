"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PokemonItem from "./PokemonItem";

interface PokemonListProps {
  initialPokemonList: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ initialPokemonList }) => {
  const { data: pokemonList } = useQuery<Pokemon[]>({
    queryKey: ["pokemonList"],
    queryFn: async () =>
      (await axios.get("http://localhost:3000/api/pokemons")).data,
    initialData: initialPokemonList,
  });

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-x-5 gap-y-8">
      {pokemonList.map((pokemon) => (
        <PokemonItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </ul>
  );
};

export default PokemonList;
