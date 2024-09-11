// external imports
import { useContext } from "react";
import { LightMode, DarkMode } from "@mui/icons-material";
import { ThemeManager } from "../../stateManager/Theme";
import IconBtn from "../Buttons/IconBtn";

export default function ModeToggle() {
  const { mode, setMode } = useContext(ThemeManager);

  return (
    <IconBtn
      handleClick={() => (mode ? setMode(false) : setMode(true))}
      label={mode ? <LightMode /> : <DarkMode />}
    />
  );
}
