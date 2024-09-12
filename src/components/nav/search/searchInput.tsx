import { InputAdornment, TextField } from "@mui/material";
import { useContext } from "react";
import { SearchTwoTone } from "@mui/icons-material";
import { Variable } from "../../../stateManager/variable";
import { ThemeManager } from "../../../stateManager/Theme";

export default function SearchInput() {
  const { search, setSearch } = useContext(Variable);
  const { isLessThanMD } = useContext(ThemeManager);

  return (
    <TextField
      name={"search"}
      error={false}
      helperText={""}
      color="primary"
      value={search}
      type={search}
      placeholder={"Enter Search Term"}
      onChange={(e) => setSearch(e.target.value)}
      sx={{
        width: isLessThanMD ? "100%" : 500,
      }}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <SearchTwoTone />
            </InputAdornment>
          ),
        },
      }}
    />
  );
}