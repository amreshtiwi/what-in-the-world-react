import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";





export default function Search(props) {

  const _searchHandler = (e) => {
    props.searchHandler(e.target.value);
  };

  return (
    <OutlinedInput
      fullWidth
      placeholder="Search for a country..."
      value={props.value}
      onChange={_searchHandler}
      startAdornment={
        <InputAdornment position="start">
          <SearchRoundedIcon />
        </InputAdornment>
      }
      style={{backgroundColor:'white', boxShadow:'0 0 5px -2px #858585'}}
    />
  );
}
