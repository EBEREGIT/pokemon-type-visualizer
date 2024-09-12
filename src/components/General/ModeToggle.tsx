// external imports
import { useContext } from "react";
import { LightMode, DarkMode } from "@mui/icons-material";
import { ThemeManager } from "../../stateManager/Theme";
import IconBtn from "../Buttons/IconBtn";
import { toggleState } from "../../utils/helpers";

export default function ModeToggle() {
  const { mode, setMode } = useContext(ThemeManager);

  return (
    <IconBtn
      handleClick={() => toggleState(mode, setMode)}
      label={mode ? <LightMode /> : <DarkMode />}
    />
  );
}
