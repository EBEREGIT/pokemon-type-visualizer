import Grid from "@mui/material/Grid2";
import { ReactElement, ReactNode } from "react";

type halfProps = {
  content: ReactElement | ReactNode;
  sx?: object;
};

export default function Half({ content, sx }: halfProps) {
  return (
    <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ ...sx }}>
      {content}
    </Grid>
  );
}
