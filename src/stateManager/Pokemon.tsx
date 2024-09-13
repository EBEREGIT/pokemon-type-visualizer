// external imports
import axios from "axios";
import React, { createContext, useContext } from "react";

// internal imports
import { BaseUrl } from "../constants";
import { BasicPokemon } from "../assets/types";
import { Variable } from "./variable";
import { General } from "./General";

type PokemonType = {
  getPokemons: () => void;
};

type PokemonProviderProps = {
  children: React.ReactNode;
};

export const Pokemon = createContext({} as PokemonType);

export default function PokemonProvider({ children }: PokemonProviderProps) {
  const {
    setPokemons,
    setIsLoading,
    setFeedback,
    setIsError,
    setIsSuccessful,
  } = useContext(Variable);
  const { reset } = useContext(General);

  const getPokemons = async () => {
    setIsLoading(true);

    try {
      // Fetch basic Pokémon data
      const response = await axios.get(`${BaseUrl}?limit=151`);
      const pokemonUrls = response?.data?.results?.map(
        (pokemon: BasicPokemon) => pokemon.url
      );

      // Fetch detailed Pokémon data using Promise.all
      const pokemonDetails = await Promise.all(
        pokemonUrls.map((url: string) => axios.get(url))
      );

      // Gather all Pokémon data
      const allPokemonData = pokemonDetails.map((pokemon) => pokemon.data);

      // Update state with all Pokémon data at once
      setPokemons(allPokemonData);

      // Mark the request as successful
      setIsSuccessful(true);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setIsError(true);
      setFeedback(`Error fetching Pokémon data:, ${error?.message as string}`);
    } finally {
      reset();
    }
  };

  return (
    <Pokemon.Provider
      value={{
        getPokemons,
      }}
    >
      {children}
    </Pokemon.Provider>
  );
}
