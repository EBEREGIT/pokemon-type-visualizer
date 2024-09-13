import {
  BasicPokemonDetails,
  SortedPokemon,
  BasicPokemonType,
  Ability,
} from "../assets/types";

// generate a unique color to match each pokemon type
export const generateRandomColors = (num: number): string[] => {
  if (num <= 0) return [];

  const colors: Set<string> = new Set<string>();

  while (colors.size < num) {
    // Generate a random hex color
    const newColor: string =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");

    // Add the new color to the set (automatically handles uniqueness)
    colors.add(newColor);
  }

  // Convert the set to an array before returning
  return Array.from(colors);
};

// count each types of pokemons
export const getPokemonTypesCount = (
  pokemons: BasicPokemonDetails[]
): Record<string, number> => {
  if (!pokemons.length) return {};

  const pokemonMap: Record<string, number> = {};

  // loop through the pokemons
  for (const pokemon of pokemons) {
    // loop through the types of each pokemon
    for (const type of pokemon.types) {
      const currentType = type.type.name;

      // update the count of each pokemon type
      pokemonMap[currentType] = (pokemonMap[currentType] || 0) + 1;
    }
  }

  return pokemonMap;
};

// set up the data to be displayed on the chart
export const setupPokemonTypes = (
  pokemonMapEntries: Array<[string, number]>
): SortedPokemon[] => {
  if (!pokemonMapEntries.length) return [];

  const colors = generateRandomColors(pokemonMapEntries.length);
  const total = getTotal(pokemonMapEntries);

  // loop through the entries and setup what the output should look like
  return pokemonMapEntries.map((pokemonEntry, index) => ({
    name: pokemonEntry[0],
    count: pokemonEntry[1],
    percentage: getPercentage(pokemonEntry[1], total),
    color: colors[index],
  }));
};

// convert the pokemonMap to an array of array of keys and value pairs
// then sort them using the second key i.e the value(s)
export const sortPokemonObject = (
  pokemonMap: Record<string, number>
): Array<[string, number]> => {
  const entries = Object.entries(pokemonMap);

  if (!entries.length) return [];

  return entries.sort((a, b) => b[1] - a[1]);
};

// count count for single and dual typed pokemons
export const getPokemonSingleVsDualTypesCount = (
  pokemons: BasicPokemonDetails[]
): Record<string, number> => {
  if (!pokemons.length) return {};

  const pokemonMap: Record<string, number> = {
    dual: 0,
    single: 0,
  };

  // loop through the pokemons
  for (const pokemon of pokemons) {
    // increase each key based on the number of a pokemon's type
    pokemonMap[pokemon.types.length > 1 ? "dual" : "single"]++;
  }

  return pokemonMap;
};

// get the Pokemon Types of a pokemon
export const retrievePokemonTypes = (
  pokemonTypes: BasicPokemonType[]
): string => {
  if (!pokemonTypes.length) return "";

  return pokemonTypes.map((type) => type.type.name).join(", ");
};

// get the Pokemon Abilities of a pokemon
export const retrievePokemonAbilities = (
  pokemonAbilities: Ability[]
): string => {
  if (!pokemonAbilities.length) return "";

  return pokemonAbilities
    .map((pokemonAbility) => pokemonAbility.ability.name) // Map each ability to its name
    .join(", "); // Join the names with a comma and space
};

// capitalize words and sentences
export const capitalize = (text: string): string => {
  if (!text.trim()) return ""; // Check if the string is empty or contains only spaces

  return text
    .split(" ") // Split text into an array of words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
    .join(" "); // Join the words back into a string with spaces
};

// calculate percentage of each type or group of types
export const getPercentage = (amount: number, total: number): number => {
  if (amount <= 0 || total <= 0) return 0;

  const result = (amount / total) * 100;
  return Number(result.toFixed(2)); // Return the result rounded to 2 decimal place as a number
};

// calculate total of the group of types
export const getTotal = (arr: Array<[string, number]>): number => {
  return arr.reduce((total, [, num]) => total + num, 0);
};
