// external imports
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { BasicPokemonDetails } from "../assets/types";

type VariableType = {
  // string
  feedback: string;
  setFeedback: Dispatch<SetStateAction<string>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;

  // array
  searchResult: unknown[];
  setSearchResult: Dispatch<SetStateAction<unknown[]>>;

  // pokemon
  pokemon: BasicPokemonDetails | null;
  setPokemon: Dispatch<SetStateAction<BasicPokemonDetails | null>>;
  pokemons: BasicPokemonDetails[];
  setPokemons: Dispatch<SetStateAction<BasicPokemonDetails[]>>;
};

type VariableProviderProps = {
  children: ReactNode;
};

export const Variable = createContext({} as VariableType);

export default function VariableProvider({ children }: VariableProviderProps) {
  // string
  const [feedback, setFeedback] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  // array
  const [searchResult, setSearchResult] = useState<unknown[]>([]);

  // pokemon
  const [pokemon, setPokemon] = useState<BasicPokemonDetails | null>(null);
  const [pokemons, setPokemons] = useState<BasicPokemonDetails[]>([]);

  return (
    <Variable.Provider
      value={{
        searchResult,
        setSearchResult,
        search,
        setSearch,
        feedback,
        setFeedback,
        pokemon,
        setPokemon,
        pokemons,
        setPokemons,
      }}
    >
      {children}
    </Variable.Provider>
  );
}
