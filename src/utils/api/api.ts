import axios from "axios";

const TOTAL_POKEMON = 151;

export async function getPokemonList() {
  const allPokemonPromises = Array.from(
    { length: TOTAL_POKEMON },
    (_, index) => {
      const id = index + 1;
      return Promise.all([
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`),
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`),
      ]);
    }
  );

  const allPokemonResponses = await Promise.all(allPokemonPromises);

  const allPokemonData = allPokemonResponses.map(
    ([response, speciesResponse]) => {
      const koreanName = speciesResponse.data.names.find(
        (name: any) => name.language.name === "ko"
      );
      return { ...response.data, korean_name: koreanName?.name || null };
    }
  );

  return allPokemonData;
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
