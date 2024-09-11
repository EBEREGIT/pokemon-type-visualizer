// external imports
import axios from "axios";
import React, { createContext, useContext } from "react";

// internal imports
import { BaseUrl } from "../constants";
import { BasicPokemon } from "../assets/types";
import { Variable } from "./variable";

type PokemonType = {
  getPokemons: () => void;
};

type PokemonProviderProps = {
  children: React.ReactNode;
};

export const Pokemon = createContext({} as PokemonType);

export default function PokemonProvider({ children }: PokemonProviderProps) {
  const { setPokemons } = useContext(Variable);

  const getPokemons = async () => {
    try {
      // get all pokemons
      const response = await axios.get(`${BaseUrl}?limit=151`);

      // get details for each pokemon
      const output = await Promise.all(
        response?.data?.results?.map((element: BasicPokemon) => {
          return axios.get(element?.url);
        })
      );

      // setup pokemons
      for (const pokemon of output) {
        setPokemons((previousState) => [...previousState, pokemon.data]);
      }
    } catch (error: unknown) {
      throw new Error(error as string);
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
