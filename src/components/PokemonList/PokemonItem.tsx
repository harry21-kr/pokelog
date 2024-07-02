import Image from "next/image";
import Link from "next/link";

interface PokemonItemProps {
  pokemon: Pokemon;
}

const PokemonItem: React.FC<PokemonItemProps> = ({ pokemon }) => {
  return (
    <li key={pokemon.id} className="bg-gray-800">
      <Link href={`/${pokemon.id}`}>
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
      </Link>
    </li>
  );
};

export default PokemonItem;
