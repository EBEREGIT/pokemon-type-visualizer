import {
  BasicPokemonDetails,
  SortedPokemon,
  BasicPokemonType,
} from "../assets/types";

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
  const sortedPokemonArray: SortedPokemon[] = [];

  const colors = generateRandomColors(pokemonMapEntries.length);
  const total = getTotal(pokemonMapEntries);

  for (const entry in pokemonMapEntries) {
    sortedPokemonArray.push({
      name: pokemonMapEntries[entry][0],
      count: pokemonMapEntries[entry][1],
      percentage: getPercentage(pokemonMapEntries[entry][1], total),
      color: colors[entry],
    });
  }

  return sortedPokemonArray;
};

// convert the pokemonMap to an array of array of keys and value pairs
// then sort them using the second key i.e the value(s)
export const sortPokemonObject = (pokemonMap: Record<string, number>) => {
  const pokemonMapEntries: Array<[string, number]> = Object.entries(
    pokemonMap
  ).sort((a, b) => b[1] - a[1]);

  return pokemonMapEntries;
};

export const getPokemonSingleVsDualTypesCount = (
  pokemons: BasicPokemonDetails[]
) => {
  const pokemonMap: Record<string, number> = {
    dual: 0,
    single: 0,
  };

  // loop through the pokemons
  for (const pokemon of pokemons) {
    if (pokemon.types.length > 1) {
      pokemonMap["dual"]++;
    } else {
      pokemonMap["single"]++;
    }
  }

  return pokemonMap;
};

export const retrievePokemonTypes = (pokemonTypes: BasicPokemonType[]) => {
  const result: string[] = [];

  for (const pokemonType of pokemonTypes) {
    result.push(pokemonType.type.name);
  }

  return result.join(", ");
};

// capitalize words and sentences
export const capitalize = (text: string) => {
  if (!text) return;

  let result = "";

  for (const str of text.split(" ")) {
    result += " " + str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  return result;
};

export const getPercentage = (amount: number, total: number) => {
  const result = (amount / total) * 100;
  return parseFloat(result.toFixed(1));
};

export const getTotal = (arr: Array<[string, number]>) => {
  let result: number = 0;

  for (const num of arr) {
    result = result + num[1];
  }

  return result;
};
