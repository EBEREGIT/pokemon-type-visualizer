import { useMemo } from "react";
import { SortedPokemon } from "../assets/types";
import { setupPokemonTypes, sortPokemonObject } from "../utils/helpers";

export default function useSort({
  pokemonMap,
}: {
  pokemonMap: Record<string, number>;
}) {
  // Memoize the sorted Pokémon types
  const sortedPokemonSingleVsDualTypes: SortedPokemon[] = useMemo(() => {
    const pokemonMapEntries: Array<[string, number]> =
      sortPokemonObject(pokemonMap);
    return setupPokemonTypes(pokemonMapEntries);
  }, [pokemonMap]);

  return sortedPokemonSingleVsDualTypes;
}
