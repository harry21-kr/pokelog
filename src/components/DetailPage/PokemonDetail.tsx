import Image from "next/image";

interface PokemonDetailProps {
  pokemon: Pokemon;
}

const PokemonDetail: React.FC<PokemonDetailProps> = ({ pokemon }) => {
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
