import Grid from "@mui/material/Grid2";
import { ReactElement, ReactNode } from "react";

type fullProps = { content: ReactElement | ReactNode; sx?: object };

export default function Full({ content, sx }: fullProps) {
  return (
    <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }} sx={{ ...sx }}>
      {content}
    </Grid>
  );
}
