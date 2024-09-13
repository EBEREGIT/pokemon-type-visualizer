import { useContext, useMemo } from "react";
import { Variable } from "../stateManager/variable";
import {
  getPokemonTypesCount,
  setupPokemonTypes,
  sortPokemonObject,
} from "../utils/helpers";
import { SortedPokemon } from "../assets/types";

const useGetSortedPokemonTypes = (): SortedPokemon[] => {
  const { pokemons } = useContext(Variable);

  // Memoize pokemonMap based on pokemons to avoid unnecessary recalculations
  const pokemonMap: Record<string, number> = useMemo(
    () => getPokemonTypesCount(pokemons),
    [pokemons]
  );

  // Memoize the sorted Pokémon types
  const sortedPokemonTypes: SortedPokemon[] = useMemo(() => {
    const pokemonMapEntries: Array<[string, number]> =
      sortPokemonObject(pokemonMap);
    return setupPokemonTypes(pokemonMapEntries);
  }, [pokemonMap]);

  return sortedPokemonTypes;
};

export default useGetSortedPokemonTypes;
