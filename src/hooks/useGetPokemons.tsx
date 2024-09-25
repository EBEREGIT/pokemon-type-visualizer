import axios from "axios";
import { BaseUrl } from "../constants";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useGetPokemonsData } from "../assets/types";

export default function useGetPokemons() {
  const getPokemons = async (): Promise<useGetPokemonsData> => {
    const response = await axios.get(`${BaseUrl}?limit=151`);
    return response.data;
  };

  const output: UseQueryResult<useGetPokemonsData, Error> = useQuery<
    useGetPokemonsData,
    Error
  >({
    queryKey: ["pokemons"],
    queryFn: () => getPokemons(),
  });

  return output;
}
