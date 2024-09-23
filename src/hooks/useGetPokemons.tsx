import axios from "axios";
import { BaseUrl } from "../constants";
import { useQuery } from "@tanstack/react-query";

export default function useGetPokemons() {
  const fetchPokemons = async () => {
    const response = await axios.get(`${BaseUrl}?limit=151`);
    return response.data;
  };

  const output = useQuery({
    queryKey: ["pokemons"],
    queryFn: () => fetchPokemons(),
  });

  return output;
}
