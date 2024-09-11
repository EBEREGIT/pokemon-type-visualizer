import { useContext, useEffect } from "react";
import { Variable } from "../../../stateManager/variable";
import { General } from "../../../stateManager/General";
import Layout from "../../../components/General/Layout";
import Pokemons from "./Pokemons";

export default function SearchResult() {
  const { pokemons, search } = useContext(Variable);
  const { searchItems } = useContext(General);

  useEffect(() => {
    searchItems(pokemons, "name");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return <Layout content={<Pokemons />} />;
}
