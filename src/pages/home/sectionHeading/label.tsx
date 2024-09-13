import { useContext } from "react";
import { ThemeManager } from "../../../stateManager/Theme";
import { Typography } from "@mui/material";

export default function LabelComponent({ label }: { label: string }) {
  const { isLessThanMD } = useContext(ThemeManager);

  return <> {!isLessThanMD && <Typography>{label}</Typography>}</>;
}
