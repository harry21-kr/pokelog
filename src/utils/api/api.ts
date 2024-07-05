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

export async function getTypeByName(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/type/${name}`);
  const type = await res.json();
  return type;
}

export async function getAbilitiesByName(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/ability/${name}`);
  const abilities = await res.json();
  return abilities;
}

export async function getMoveByName(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/move/${name}`);
  const move = await res.json();
  return move;
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

export async function getPokemonDetailInfoById(id: string) {
  const pokemonInfo = await getPokemonInfoById(id);
  const pokemonSpecies = await getPokemonSpeciesById(id);

  const koreanFlavorText = pokemonSpecies.flavor_text_entries.find(
    (v: any) => v.language.name === "ko"
  );

  const koreanName = pokemonSpecies.names?.find(
    (name: any) => name.language.name === "ko"
  );

  const pokemonTypes = await Promise.all(
    pokemonInfo.types.map(async (type: any) => {
      const typeResponse = await getTypeByName(type.type.name);
      const koreanTypeName =
        typeResponse.names?.find((name: any) => name.language.name === "ko")
          ?.name || type.type.name;
      return { ...type, type: { ...type.type, korean_name: koreanTypeName } };
    })
  );

  const pokemonAbilities = await Promise.all(
    pokemonInfo.abilities.map(async (ability: any) => {
      const abilityResponse = await getAbilitiesByName(ability.ability.name);
      const koreanAbilityName =
        abilityResponse.names?.find((name: any) => name.language.name === "ko")
          ?.name || ability.ability.name;
      return {
        ...ability,
        ability: { ...ability.ability, korean_name: koreanAbilityName },
      };
    })
  );

  const pokemonMoves = await Promise.all(
    pokemonInfo.moves.map(async (move: any) => {
      const moveResponse = await getMoveByName(move.move.name);
      const koreanMoveName =
        moveResponse.names?.find((name: any) => name.language.name === "ko")
          ?.name || move.move.name;
      return { ...move, move: { ...move.move, korean_name: koreanMoveName } };
    })
  );

  const pokemonDetailInfo = {
    ...pokemonInfo,
    korean_name: koreanName?.name || pokemonInfo.name,
    korean_flavor_text: koreanFlavorText.flavor_text,
    types: pokemonTypes,
    abilities: pokemonAbilities,
    moves: pokemonMoves,
  };

  return pokemonDetailInfo;
}
