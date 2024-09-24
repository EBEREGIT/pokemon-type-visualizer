// external imports
import { useContext } from "react";
import { SearchTwoTone } from "@mui/icons-material";
import IconBtn from "../../Buttons/IconBtn";
import { General } from "../../../stateManager/General";

export default function SearchButton() {
  const { show, setShow } = useContext(General);

  return (
    <IconBtn handleClick={() => setShow(!show)} label={<SearchTwoTone />} />
  );
}
