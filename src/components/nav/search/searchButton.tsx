// external imports
import { useContext } from "react";
import { SearchTwoTone } from "@mui/icons-material";
import IconBtn from "../../Buttons/IconBtn";
import { Variable } from "../../../stateManager/variable";

export default function SearchButton() {
  const { show, setShow } = useContext(Variable);

  return (
    <IconBtn handleClick={() => setShow(!show)} label={<SearchTwoTone />} />
  );
}
