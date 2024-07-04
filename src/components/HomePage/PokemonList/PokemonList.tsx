"use client";

import usePokemonInfiniteQuery from "@/hooks/usePokemonInfiniteQuery";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import PokemonItem from "./PokemonItem";

interface PokemonListProps {
  initialPokemonData: PokemonData;
}

const PokemonList: React.FC<PokemonListProps> = ({ initialPokemonData }) => {
  const { data: pokemonList, fetchNextPage } =
    usePokemonInfiniteQuery(initialPokemonData);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <>
      <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-x-5 gap-y-8">
        {pokemonList.map((pokemon) => (
          <PokemonItem key={pokemon.id} pokemon={pokemon} />
        ))}
      </ul>
      <div ref={ref} className="flex justify-center pt-4">
        {inView && (
          <Image src="/loading.webp" alt="" width={200} height={200} />
        )}
      </div>
    </>
  );
};

export default PokemonList;
