"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useEffect } from "react";

const PokemonList = () => {
  const { data: pokemonList } = useSuspenseQuery<Pokemon[]>({
    queryKey: ["pokemonList"],
    queryFn: async () =>
      (await axios.get("http://localhost:3000/api/pokemons")).data,
  });

  useEffect(() => {
    console.log(pokemonList);
  }, [pokemonList]);

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-x-5 gap-y-8">
      {pokemonList.map((pokemon) => (
        <li key={pokemon.id} className="bg-gray-800">
          <h6>{pokemon.korean_name}</h6>
          <div className="relative aspect-square">
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              fill
              sizes="300px"
              className="object-cover"
              priority
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
