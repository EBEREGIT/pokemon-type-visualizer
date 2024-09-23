import { useContext, useMemo } from "react";
import { Variable } from "../stateManager/variable";
import { getPokemonSingleVsDualTypesCount } from "../utils/helpers";
import { SortedPokemon } from "../assets/types";
import useSort from "./useSort";

const useGetPokemonSingleVsDualTypes = (): SortedPokemon[] => {
  const { pokemons } = useContext(Variable);

  // Memoize pokemonMap based on pokemons to avoid unnecessary recalculations
  const pokemonMap: Record<string, number> = useMemo(
    () => getPokemonSingleVsDualTypesCount(pokemons),
    [pokemons]
  );

  // return the sorted data
  return useSort({ pokemonMap });
};

export default useGetPokemonSingleVsDualTypes;
