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
  const { isLoading, isSuccessful, isError, feedback } = React.useContext(Variable);

  // Determine the severity and message for the alert
  const severity = isSuccessful
    ? "success"
    : isError
    ? "error"
    : isLoading
    ? "warning"
    : "info";

  const message = isLoading
    ? "Working... Please Wait 🙏🏾"
    : isSuccessful
    ? "Successful 😊"
    : isError
    ? feedback
    : "";

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={Boolean(isLoading || isSuccessful || isError || feedback)}
        autoHideDuration={5000}
      >
        <Alert severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}