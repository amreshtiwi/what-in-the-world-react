import { Box } from "@mui/material";
import Countries from "./countriesSection/countriesSection";
import FavouritesSection from "./favouritesSection/FavouritesSection";

export default function FavAndCountriesSection(props) {
  return (
    <Box justifyContent={"space-between"} display={"flex"} mt={"72px"}>
      <FavouritesSection
        favourites={props.favourites}
        addToFavourites={props.addToFavourites}
        removeFromFavourites={props.removeFromFavourites}
      />
      <Countries
        countries={props.countries}
        favourites={props.favourites}
        addToFavourites={props.addToFavourites}
      />
    </Box>
  );
}
