import Image from "next/image";
import Chip from "../common/Chip/Chip";
import PokemonDetailNav from "./PokemonDetailNav";

interface PokemonDetailProps {
  pokemon: Pokemon;
}

const PokemonDetail: React.FC<PokemonDetailProps> = ({ pokemon }) => {
  return (
    <div className="relative border-[3px] p-12 flex justify-between items-center min-h-[600px] min-w-[300px] max-w-[960px] w-full md:flex-row flex-col mx-auto">
      <PokemonDetailNav />
      <div className="relative aspect-square w-full md:w-1/2">
        <Image
          src={pokemon.sprites.front_default}
          fill
          alt={pokemon.name}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 w-full md:w-1/2 md:ml-4">
        <div className="flex flex-col gap-1">
          <h4 className="text-gray-400 font-semibold">No.{pokemon.id}</h4>
          <h4 className="text-3xl font-bold">{pokemon.korean_name}</h4>
          <div className="flex items-center gap-1">
            {pokemon.types.map((v, idx) => (
              <Chip key={idx} type={v.type.name}>
                {v.type.korean_name}
              </Chip>
            ))}
          </div>
        </div>
        <p className="break-keep">{pokemon.korean_flavor_text}</p>
        <div className="flex flex-col gap-1 w-fit">
          <p className="font-bold text-lg">기술</p>
          <div className="flex gap-1 items-center">
            {pokemon.abilities.map((v, idx) => (
              <Chip key={idx}>{v.ability.korean_name}</Chip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
