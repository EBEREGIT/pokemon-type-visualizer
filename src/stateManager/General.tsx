/* eslint-disable @typescript-eslint/no-explicit-any */
// external imports
import React, { createContext, useContext } from "react";

// internal imports
import { Variable } from "./variable";

type GeneralType = {
  reset: () => void;
  searchItems: () => void;
};

type GeneralProviderProps = {
  children: React.ReactNode;
};

export const General = createContext({} as GeneralType);

export default function GeneralProvider({ children }: GeneralProviderProps) {
  const {
    setSearchResult,
    search,
    setSearch,
    setIsLoading,
    setIsError,
    setIsSuccessful,
    pokemons,
    setFeedback,
  } = useContext(Variable);

  // reset
  const reset = () => {
    setTimeout(() => {
      setIsLoading(false);
      setIsError(false);
      setIsSuccessful(false);
      setFeedback("");
    }, 500);
  };

  // search Items
  const searchItems = () => {
    // Clear results if search term is empty
    if (!search.trim()) {
      setSearchResult([]);
      return;
    }

    // Clear search term if Pokémon list is empty
    if (!pokemons?.length) {
      setSearch("");
      setFeedback("No Pokémon available to search.");
      setIsError(true);
      reset()
    }

    // Prepare search term for filtering
    const normalizedSearch = search.toLowerCase().replace(/\s+/g, "");

    // Filter Pokémon based on search term
    const results = pokemons.filter(({ name }) =>
      name.toLowerCase().replace(/\s+/g, "").includes(normalizedSearch)
    );

    // Update search results if necessary
    if (results.length) {
      setSearchResult(results);
    } else {
      // If no results, clear the search result array
      setSearchResult([]);
    }

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
        reset,
      }}
    >
      {children}
    </General.Provider>
  );
}
