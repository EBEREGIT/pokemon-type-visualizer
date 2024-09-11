import { useContext } from "react";
import { Variable } from "../stateManager/variable";
import { getPokemonTypesCount, setupPokemonTypes } from "../utils/helpers";

export default function useGetSortedPokemonTypes() {
  const { pokemons } = useContext(Variable);

  const pokemonMap: Record<string, number> = getPokemonTypesCount(pokemons);

  // convert the pokemonMap to an array of array of keys and value pairs
  // then sort them using the second key i.e the value(s)
  const pokemonMapEntries: Array<[string, number]> = Object.entries(
    pokemonMap
  ).sort((a, b) => b[1] - a[1]);

  return setupPokemonTypes(pokemonMapEntries);
}
