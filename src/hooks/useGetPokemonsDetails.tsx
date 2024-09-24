import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import useGetPokemons from "./useGetPokemons";
import {
  BasicPokemon,
  BasicPokemonDetails,
  useGetPokemonsData,
} from "../assets/types";

export default function useGetPokemonsDetails() {
  const pokemons = useGetPokemons();

  const pokemonsData = pokemons.data as useGetPokemonsData;

  const pokemonUrls: string[] = pokemonsData?.results?.map(
    (pokemon: BasicPokemon) => pokemon.url
  );

  const getPokemonsDetails = async (): Promise<BasicPokemonDetails[]> => {
    const response = await Promise.all(
      pokemonUrls?.map((url: string) => axios.get(url))
    );
    return response.map((pokemon) => pokemon.data);
  };

  const output: UseQueryResult<BasicPokemonDetails[], Error> = useQuery<
    BasicPokemonDetails[],
    Error
  >({
    queryKey: ["pokemonsDetails"],
    queryFn: () => getPokemonsDetails(),
  });

  return output;
}
