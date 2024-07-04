import { useInfiniteQuery } from "@tanstack/react-query";

const usePokemonInfiniteQuery = (initialData: PokemonData) => {
  const result = useInfiniteQuery<
    PokemonData,
    Error,
    Pokemon[],
    string[],
    number
  >({
    queryKey: ["pokemonList"],
    queryFn: async ({ pageParam }) => {
      const res = await fetch(`/api/pokemons?page=${pageParam}`);
      const data = await res.json();
      return data;
    },
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (!lastPage.next) {
        return undefined;
      }

      return lastPageParam + 1;
    },
    initialData: { pages: [initialData], pageParams: [1] },
    initialPageParam: 1,
    select: (data) =>
      data.pages.reduce(
        (acc, { results }) => [...acc, ...results],
        [] as Pokemon[]
      ),
  });

  return { ...result };
};

export default usePokemonInfiniteQuery;
