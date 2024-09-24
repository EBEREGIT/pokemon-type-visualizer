/* eslint-disable @typescript-eslint/no-explicit-any */
// external imports
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

// internal imports
import { BasicPokemonDetails } from "../assets/types";
import useGetPokemonsDetails from "../hooks/useGetPokemonsDetails";
import { UseQueryResult } from "@tanstack/react-query";

type GeneralType = {
  searchItems: () => void;

  // string
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;

  // boolean
  showPercentage: boolean;
  setShowPercentage: Dispatch<SetStateAction<boolean>>;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;

  // array
  searchResult: BasicPokemonDetails[];
  setSearchResult: Dispatch<SetStateAction<BasicPokemonDetails[]>>;
};

type GeneralProviderProps = {
  children: React.ReactNode;
};

export const General = createContext({} as GeneralType);

export default function GeneralProvider({ children }: GeneralProviderProps) {
  // string
  const [search, setSearch] = useState<string>("");

  // boolean
  const [showPercentage, setShowPercentage] = useState(false);
  const [show, setShow] = useState(false);

  // array
  const [searchResult, setSearchResult] = useState<BasicPokemonDetails[]>([]);

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
        searchResult,
        setSearchResult,
        search,
        setSearch,
        showPercentage,
        setShowPercentage,
        show,
        setShow,
      }}
    >
      {children}
    </General.Provider>
  );
}
