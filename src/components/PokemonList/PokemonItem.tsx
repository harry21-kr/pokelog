import Image from "next/image";
import Link from "next/link";

interface PokemonItemProps {
  pokemon: Pokemon;
}

const PokemonItem: React.FC<PokemonItemProps> = ({ pokemon }) => {
  return (
    <li key={pokemon.id}>
      <Link href={`/${pokemon.id}`}>
        <div className="relative aspect-square border-gray-300 border rounded">
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            fill
            sizes="300px"
            className="object-cover"
            priority
          />
        </div>
        <div className="pt-2 pl-2">
          <h5 className="text-gray-400 font-semibold">No.{pokemon.id}</h5>
          <h6 className="text-lg font-bold">{pokemon.korean_name}</h6>
          <div className="flex items-center gap-1">
            {pokemon.types.map((v, idx) => (
              <div key={idx} className="bg-blue-500">
                <p className="text-white">{v.type.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default PokemonItem;
