import { useContext, useMemo } from "react";
import { Variable } from "../stateManager/variable";
import {
  getPokemonTypesCount,
  setupPokemonTypes,
  sortPokemonObject,
} from "../utils/helpers";

export default function useGetSortedPokemonTypes() {
  const { pokemons } = useContext(Variable);

  const pokemonMap: Record<string, number> = getPokemonTypesCount(pokemons);

  const pokemonMapEntries: Array<[string, number]> =
    sortPokemonObject(pokemonMap);

  const sortedPokemonTypes = useMemo(
    () => setupPokemonTypes(pokemonMapEntries),
    [pokemonMapEntries]
  );

  return sortedPokemonTypes;
}
