/* eslint-disable @typescript-eslint/no-explicit-any */
// external imports
import { IconButton } from "@mui/material";

export default function IconBtn(props: {
  handleClick: () => void;
  label: any;
}) {
  const { handleClick, label } = props;

  return (
    <IconButton
      size="large"
      edge="end"
      color="inherit"
      aria-label={label}
      onClick={() => handleClick()}
    >
      {label}
    </IconButton>
  );
}
