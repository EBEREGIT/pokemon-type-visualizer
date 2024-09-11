// external imports
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

// internal imports
import { useContext } from "react";
import { Variable } from "../../stateManager/variable";

export default function Loader() {
  const { isLoading } = useContext(Variable);

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
