"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useEffect } from "react";

const PokemonList = () => {
  const { data: pokemonList } = useQuery<Pokemon[]>({
    queryKey: ["pokemonList"],
    queryFn: async () =>
      (await axios.get("http://localhost:3000/api/pokemons")).data,
    initialData: [],
  });

  useEffect(() => {
    console.log(pokemonList);
  }, [pokemonList]);

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-5 gap-y-8">
      {pokemonList.map((pokemon) => (
        <li key={pokemon.id}>
          <h6>{pokemon.korean_name}</h6>
          <div className="relative aspect-square">
            <Image
              src={pokemon.sprites.front_default}
              fill
              alt={pokemon.name}
              className="object-cover"
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
