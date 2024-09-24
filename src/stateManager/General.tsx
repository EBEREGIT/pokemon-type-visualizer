/* eslint-disable @typescript-eslint/no-explicit-any */
// external imports
import React, { createContext, useContext } from "react";

// internal imports
import { Variable } from "./variable";
import { BasicPokemonDetails } from "../assets/types";
import useGetPokemonsDetails from "../hooks/useGetPokemonsDetails";
import { UseQueryResult } from "@tanstack/react-query";

type GeneralType = {
  searchItems: () => void;
};

type GeneralProviderProps = {
  children: React.ReactNode;
};

export const General = createContext({} as GeneralType);

export default function GeneralProvider({ children }: GeneralProviderProps) {
  const { setSearchResult, search, setSearch } = useContext(Variable);

  const pokemons: UseQueryResult<BasicPokemonDetails[], Error> =
    useGetPokemonsDetails();
  const pokemonsDetails = pokemons.data as BasicPokemonDetails[];

  // search Items
  const searchItems = () => {
    // Clear results if search term is empty
    if (!search.trim()) {
      setSearchResult([]);
      return;
    }

    // Clear search term if Pokémon list is empty
    if (!pokemonsDetails?.length) {
      setSearch("");
      return;
    }

    // Prepare search term for filtering
    const normalizedSearch = search.toLowerCase().replace(/\s+/g, "");

    // Filter Pokémon based on search term
    const results = pokemonsDetails.filter(({ name }) =>
      name.toLowerCase().replace(/\s+/g, "").includes(normalizedSearch)
    );

    // Update search results if necessary
    setSearchResult(results);

    // Scroll to top to display search results
    window.scrollTo({
      top: 10,
      behavior: "smooth",
    });
  };

  return (
    <General.Provider
      value={{
        searchItems,
      }}
    >
      {children}
    </General.Provider>
  );
}
