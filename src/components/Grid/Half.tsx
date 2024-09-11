import Grid from "@mui/material/Grid2";
import { ReactElement, ReactNode } from "react";

export default function Half(props: {
  content: ReactElement | ReactNode;
  sx?: object;
}) {
  const { content, sx } = props;

  return (
    <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ ...sx }}>
      {content}
    </Grid>
  );
}
