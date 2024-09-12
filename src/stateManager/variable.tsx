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

  // boolean
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  isError: boolean;
  setIsError: Dispatch<SetStateAction<boolean>>;
  isSuccessful: boolean;
  setIsSuccessful: Dispatch<SetStateAction<boolean>>;
  showPercentage: boolean;
  setShowPercentage: Dispatch<SetStateAction<boolean>>;

  // array
  searchResult: BasicPokemonDetails[];
  setSearchResult: Dispatch<SetStateAction<BasicPokemonDetails[]>>;

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

  // boolean
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);
  const [showPercentage, setShowPercentage] = useState(false);

  // array
  const [searchResult, setSearchResult] = useState<BasicPokemonDetails[]>([]);

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
        isLoading,
        setIsLoading,
        isError,
        setIsError,
        isSuccessful,
        setIsSuccessful,
        showPercentage,
        setShowPercentage,
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
