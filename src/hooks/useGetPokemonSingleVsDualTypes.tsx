import { useMemo } from "react";
import { getPokemonSingleVsDualTypesCount } from "../utils/helpers";
import { BasicPokemonDetails, SortedPokemon } from "../assets/types";
import useSort from "./useSort";
import useGetPokemonsDetails from "./useGetPokemonsDetails";

const useGetPokemonSingleVsDualTypes = (): SortedPokemon[] => {
  const pokemons = useGetPokemonsDetails();

  // Memoize pokemonMap based on pokemons to avoid unnecessary recalculations
  const pokemonMap: Record<string, number> = useMemo(
    () =>
      getPokemonSingleVsDualTypesCount(pokemons.data as BasicPokemonDetails[]),
    [pokemons]
  );

  // return the sorted data
  return useSort({ pokemonMap });
};

export default useGetPokemonSingleVsDualTypes;
