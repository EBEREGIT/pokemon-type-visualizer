/* eslint-disable @typescript-eslint/no-explicit-any */
// external imports
import React, { createContext, useContext } from "react";

// internal imports
import { Variable } from "./variable";

type GeneralType = {
  reset: () => void;
  searchItems: (items: any[], searchKey: string) => void;
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
  } = useContext(Variable);

  // reset
  const reset = () => {
    setTimeout(() => {
      setIsLoading(false);
      setIsError(false);
      setIsSuccessful(false);
    }, 1000);
  };

  // search Items
  const searchItems = (items: any[], searchKey: string) => {
    if (!search) return setSearchResult([]);

    if (!items?.length) {
      setSearch("");
      return alert("No items to search");
    }

    setSearchResult([]);

    const results = items.filter((item) =>
      item[searchKey]
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(search.toLowerCase().replace(/\s+/g, ""))
    );

    setSearchResult(results);
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
