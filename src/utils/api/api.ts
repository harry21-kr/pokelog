import axios from "axios";

export async function getPokemonRawData(offset: string) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=24`
  );
  const pokemonRawData: PokemonRawData = await res.json();
  return pokemonRawData;
}

export async function getPokemonInfoById(id: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemonInfo = await res.json();
  return pokemonInfo;
}

export async function getPokemonSpeciesById(id: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  const pokemonSpecies = await res.json();
  return pokemonSpecies;
}

export async function getPokemonInfoList(offset: string) {
  const pokemonRawData = await getPokemonRawData(offset);
  const pokemonInfoList = await Promise.all(
    pokemonRawData.results.map(({ name }) => getPokemonInfoById(name))
  );
  const pokemonData: PokemonData = {
    ...pokemonRawData,
    results: pokemonInfoList,
  };

  return pokemonData;
}

export async function getPokemonById(id: string) {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const speciesResponse = await axios.get(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );

  const koreanFlavorText = speciesResponse.data.flavor_text_entries.find(
    (v: any) => v.language.name === "ko"
  );

  const koreanName = speciesResponse.data.names?.find(
    (name: any) => name.language.name === "ko"
  );

  const typesWithKoreanNames = await Promise.all(
    response.data.types.map(async (type: any) => {
      const typeResponse = await axios.get(type.type.url);
      const koreanTypeName =
        typeResponse.data.names?.find(
          (name: any) => name.language.name === "ko"
        )?.name || type.type.name;
      return { ...type, type: { ...type.type, korean_name: koreanTypeName } };
    })
  );

  const abilitiesWithKoreanNames = await Promise.all(
    response.data.abilities.map(async (ability: any) => {
      const abilityResponse = await axios.get(ability.ability.url);
      const koreanAbilityName =
        abilityResponse.data.names?.find(
          (name: any) => name.language.name === "ko"
        )?.name || ability.ability.name;
      return {
        ...ability,
        ability: { ...ability.ability, korean_name: koreanAbilityName },
      };
    })
  );

  const movesWithKoreanNames = await Promise.all(
    response.data.moves.map(async (move: any) => {
      const moveResponse = await axios.get(move.move.url);
      const koreanMoveName =
        moveResponse.data.names?.find(
          (name: any) => name.language.name === "ko"
        )?.name || move.move.name;
      return { ...move, move: { ...move.move, korean_name: koreanMoveName } };
    })
  );

  const pokemonData = {
    ...response.data,
    korean_name: koreanName?.name || response.data.name,
    korean_flavor_text: koreanFlavorText.flavor_text,
    types: typesWithKoreanNames,
    abilities: abilitiesWithKoreanNames,
    moves: movesWithKoreanNames,
  };

  return pokemonData;
}
