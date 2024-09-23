import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useGetPokemons from "./useGetPokemons";
import { BasicPokemon } from "../assets/types";

export default function useGetPokemonsDetails() {
  const pokemons = useGetPokemons();

  const pokemonUrls = pokemons?.data?.results?.map(
    (pokemon: BasicPokemon) => pokemon.url
  );

  const fetchPokemonsDetails = async () => {
    const response = await Promise.all(
      pokemonUrls.map((url: string) => axios.get(url))
    );
    return response.map((pokemon) => pokemon.data);
  };

  const output = useQuery({
    queryKey: ["pokemonsDetails"],
    queryFn: () => fetchPokemonsDetails(),
  });

  return output;
}
