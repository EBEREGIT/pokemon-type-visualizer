import { useContext, useMemo } from "react";
import { Variable } from "../stateManager/variable";
import { getPokemonTypesCount } from "../utils/helpers";
import { SortedPokemon } from "../assets/types";
import useSort from "./useSort";

const useGetSortedPokemonTypes = (): SortedPokemon[] => {
  const { pokemons } = useContext(Variable);

  // Memoize pokemonMap based on pokemons to avoid unnecessary recalculations
  const pokemonMap: Record<string, number> = useMemo(
    () => getPokemonTypesCount(pokemons),
    [pokemons]
  );

  // return the sorted data
  return useSort({ pokemonMap });
};

export default useGetSortedPokemonTypes;
