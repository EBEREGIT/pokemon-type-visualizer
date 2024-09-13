import { useContext, useMemo } from "react";
import { Variable } from "../stateManager/variable";
import {
  getPokemonSingleVsDualTypesCount,
  setupPokemonTypes,
  sortPokemonObject,
} from "../utils/helpers";
import { SortedPokemon } from "../assets/types";

const useGetPokemonSingleVsDualTypes = (): SortedPokemon[] => {
  const { pokemons } = useContext(Variable);

  // Memoize pokemonMap based on pokemons to avoid unnecessary recalculations
  const pokemonMap: Record<string, number> = useMemo(
    () => getPokemonSingleVsDualTypesCount(pokemons),
    [pokemons]
  );

  // Memoize the sorted Pokémon types
  const sortedPokemonSingleVsDualTypes: SortedPokemon[] = useMemo(() => {
    const pokemonMapEntries: Array<[string, number]> =
      sortPokemonObject(pokemonMap);
    return setupPokemonTypes(pokemonMapEntries);
  }, [pokemonMap]);

  return sortedPokemonSingleVsDualTypes;
};

export default useGetPokemonSingleVsDualTypes;
