import { useContext, useRef } from "react";
import CountriesContext from "../../container-context/CountriesContainer";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";





export default function Search() {
  const searchRef = useRef();
  const countriesContext = useContext(CountriesContext);

  const search = () => {
    countriesContext.searchHandler(searchRef.current.children[1].value);
}



  return (
    <OutlinedInput
      fullWidth
      placeholder="Search for a country..."
      ref={searchRef}
      onKeyUp={search}
      startAdornment={
        <InputAdornment position="start">
          <SearchRoundedIcon />
        </InputAdornment>
      }
      style={{backgroundColor:'white', boxShadow:'0 0 5px -2px #858585'}}
    />
  );
}
