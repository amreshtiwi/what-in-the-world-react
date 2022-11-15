import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useContext } from "react";
import CountriesContext from "../../container-context/CountriesContainer";

export default function SelectLabels() {
  const countriesContext = useContext(CountriesContext);
  const [filter, setFilter] = React.useState("");
  const selectItem = [
    "Asia",
    "Africa",
    "America",
    "Europe",
    "Oceania",
    "Favourites",
  ];


  const selectFilter = (e) => {
    setFilter(e.target.value ? e.target.value : "");
    countriesContext.filterHandler(e.target.value);
  };

  return (
    <FormControl
      sx={{
        minWidth: 180,
        boxShadow: "0 3px 10px -7px #858585",
        ".MuiOutlinedInput-notchedOutline": { border: 0 },
        background: "white",
      }}
    >
      <Select
        value={filter}
        onChange={(e) => {
          selectFilter(e);
        }}
        displayEmpty
      >
        <MenuItem value="">Filter By</MenuItem>
        {selectItem.map((filter) => (
          <MenuItem key={filter} value={filter}>
            {filter}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
