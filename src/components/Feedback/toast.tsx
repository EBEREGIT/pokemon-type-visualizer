import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Variable } from "../../stateManager/variable";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Toast() {
  const { isLoading, isSuccessful, isError } = React.useContext(Variable);

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={isLoading || isSuccessful || isError ? true : false}
        autoHideDuration={5000}
      >
        <Alert
          severity={
            isSuccessful
              ? "success"
              : isError
              ? "error"
              : isLoading
              ? "warning"
              : "info"
          }
          sx={{ width: "100%" }}
        >
          {isLoading
            ? "Working... Please Wait 🙏🏾"
            : isSuccessful
            ? "Successful 😊"
            : isError
            ? "Error Processing Request 😭"
            : ""}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
