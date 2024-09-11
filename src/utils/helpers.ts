import { BasicPokemonDetails } from "../assets/types";

// generate a unique color to match each pokemon type
export const generateRandomColors = (num: number) => {
  const colors: string[] = [];

  // loop until colors are equal to the num
  while (colors.length < num) {
    const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    if (!colors.includes(newColor)) {
      colors.push(newColor);
    }
  }

  return [...new Set(colors)];
};

// count each types of pokemons
export const getPokemonTypesCount = (pokemons: BasicPokemonDetails[]) => {
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
};

// set up the data to be displayed on the chart
export const setupPokemonTypes = (
  pokemonMapEntries: Array<[string, number]>
) => {
  const sortedPokemonArray = [];

  const colors = generateRandomColors(pokemonMapEntries.length);

  for (const entry in pokemonMapEntries) {
    sortedPokemonArray.push({
      name: pokemonMapEntries[entry][0],
      count: pokemonMapEntries[entry][1],
      color: colors[entry],
    });
  }

  return sortedPokemonArray;
};
