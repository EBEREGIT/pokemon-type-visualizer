import { useContext, useEffect } from "react";
import { Variable } from "../../../stateManager/variable";
import { General } from "../../../stateManager/General";
import Layout from "../../../components/General/Layout";
import Pokemons from "./Pokemons";
import Animate from "../../../components/General/Animate";
import useDebounce from "../../../hooks/useDebounce";

export default function SearchResult() {
  const { search } = useContext(Variable);
  const { searchItems } = useContext(General);
  const debouncedValue = useDebounce(search);

  useEffect(() => {
    searchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return <Animate content={<Layout content={<Pokemons />} />} />;
}
