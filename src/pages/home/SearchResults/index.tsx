import { useContext, useEffect } from "react";
import { General } from "../../../stateManager/General";
import Layout from "../../../components/General/Layout";
import Pokemons from "./Pokemons";
import Animate from "../../../components/General/Animate";
import useDebounce from "../../../hooks/useDebounce";

export default function SearchResult() {
  const { searchItems, search } = useContext(General);
  const debouncedValue = useDebounce(search);

  useEffect(() => {
    searchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return <Animate content={<Layout content={<Pokemons />} />} />;
}
