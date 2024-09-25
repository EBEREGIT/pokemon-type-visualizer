import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { UseQueryResult } from "@tanstack/react-query";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Toast(props: { data: UseQueryResult<unknown, Error> }) {
  const { isSuccess, isLoading, isError } = props.data;

  // Determine the severity and message for the alert
  const severity = isSuccess
    ? "success"
    : isError
    ? "error"
    : isLoading
    ? "warning"
    : "info";

  const message = isLoading
    ? "Working... Please Wait 🙏🏾"
    : isSuccess
    ? "Successful 😊"
    : isError
    ? "An Error Occurred"
    : "";

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={Boolean(isLoading || isSuccess || isError)}
        autoHideDuration={1000}
        onClose={() => {}}
      >
        <Alert severity={severity} sx={{ width: "100%" }} onClose={() => {}}>
          {message as React.ReactNode}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
