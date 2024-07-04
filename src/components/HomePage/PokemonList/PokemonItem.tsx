import Chip from "@/components/common/Chip/Chip";
import Image from "next/image";
import Link from "next/link";

interface PokemonItemProps {
  pokemon: Pokemon;
}

const PokemonItem: React.FC<PokemonItemProps> = ({ pokemon }) => {
  return (
    <li key={pokemon.id}>
      <Link href={`/${pokemon.id}`} className="group">
        <div className="relative aspect-square border-gray-300 border rounded group-hover:scale-110 group-hover:bg-gray-700 transition">
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            fill
            sizes="300px"
            className="object-cover"
            priority
          />
        </div>
        <div className="pt-2 pl-2 flex flex-col gap-1">
          <h5 className="text-gray-400 font-semibold">No.{pokemon.id}</h5>
          <h6 className="text-lg font-bold">{pokemon.name}</h6>
          <div className="flex items-center gap-1">
            {pokemon.types.map((v, idx) => (
              <Chip key={idx} type={v.type.name}>
                {v.type.name}
              </Chip>
            ))}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default PokemonItem;
