import { useMemo } from "react";
import { getPokemonSingleVsDualTypesCount } from "../utils/helpers";
import { BasicPokemonDetails, SortedPokemon } from "../assets/types";
import useSort from "./useSort";
import useGetPokemonsDetails from "./useGetPokemonsDetails";

const useGetPokemonSingleVsDualTypes = (): SortedPokemon[] => {
  const pokemons = useGetPokemonsDetails();
  const pokemonsDetails = pokemons.data as BasicPokemonDetails[];

  // Memoize pokemonMap based on pokemons to avoid unnecessary recalculations
  const pokemonMap: Record<string, number> = useMemo(
    () => getPokemonSingleVsDualTypesCount(pokemonsDetails),
    [pokemonsDetails]
  );

  // return the sorted data
  return useSort({ pokemonMap });
};

export default useGetPokemonSingleVsDualTypes;
