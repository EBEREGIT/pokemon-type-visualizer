import { useContext } from "react";
import { Variable } from "../stateManager/variable";
import {
  getPokemonSingleVsDualTypesCount,
  setupPokemonTypes,
  sortPokemonObject,
} from "../utils/helpers";

export default function useGetPokemonSingleVsDualTypes() {
  const { pokemons } = useContext(Variable);

  const pokemonMap: Record<string, number> =
    getPokemonSingleVsDualTypesCount(pokemons);

  const pokemonMapEntries: Array<[string, number]> =
    sortPokemonObject(pokemonMap);

  return setupPokemonTypes(pokemonMapEntries);
}
