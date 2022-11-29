import {  Grid } from "@mui/material";
import SelectLabels from "./filter";
import Search from "./search";


export default function SearchFilterSection(props) {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      spacing={4}
    >
      <Grid item xs={12} md={4}>
        <Search value={props.value} searchHandler={props.searchHandler} />
      </Grid>

      <Grid item xs={3} md={2}>
        <SelectLabels filterHandler={props.filterHandler} />
      </Grid>
    </Grid>
  );
}
