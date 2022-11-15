import {  Grid } from "@mui/material";
import SelectLabels from "./filter";
import Search from "./search";


export default function SearchFilterSection() {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      spacing={4}
    >
      <Grid item xs={12} md={4}>
        <Search />
      </Grid>

      <Grid item xs={3} md={2}>
        <SelectLabels />
      </Grid>
    </Grid>
  );
}
