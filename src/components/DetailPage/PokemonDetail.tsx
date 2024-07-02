"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";

interface PokemonDetailProps {
  initialPokemon: Pokemon;
}

const PokemonDetail: React.FC<PokemonDetailProps> = ({ initialPokemon }) => {
  const { id } = useParams();
  const { data: pokemon } = useQuery<Pokemon>({
    queryKey: ["pokemon", id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/api/pokemons/${id}`);
      return res.data;
    },
    initialData: initialPokemon,
  });

  return (
    <div>
      <h4>{pokemon.korean_name}</h4>
      <Image
        src={pokemon.sprites.front_default}
        width={300}
        height={300}
        alt={pokemon.name}
      />
    </div>
  );
};

export default PokemonDetail;
