import { useContext } from "react";
import { Variable } from "../stateManager/variable";

export default function useGetPokemonTypes() {
  const { pokemons } = useContext(Variable);

  const pokemonMap: Record<string, number> = {};

  // loop through the pokemons
  for (const pokemon of pokemons) {
    // loop through the types of each pokemon
    for (const type of pokemon.types) {
      const currentType = type.type.name;

      // update the number of each pokemon type
      if (Object.prototype.hasOwnProperty.call(pokemonMap, currentType)) {
        pokemonMap[currentType]++;
      } else {
        pokemonMap[currentType] = 1;
      }
    }
  }

  return pokemonMap;
}
