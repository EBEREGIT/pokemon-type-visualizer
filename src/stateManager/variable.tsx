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
  showPercentage: boolean;
  setShowPercentage: Dispatch<SetStateAction<boolean>>;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;

  // array
  searchResult: BasicPokemonDetails[];
  setSearchResult: Dispatch<SetStateAction<BasicPokemonDetails[]>>;
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
  const [showPercentage, setShowPercentage] = useState(false);
  const [show, setShow] = useState(false);

  // array
  const [searchResult, setSearchResult] = useState<BasicPokemonDetails[]>([]);

  return (
    <Variable.Provider
      value={{
        searchResult,
        setSearchResult,
        search,
        setSearch,
        feedback,
        setFeedback,
        showPercentage,
        setShowPercentage,
        show,
        setShow,
      }}
    >
      {children}
    </Variable.Provider>
  );
}
