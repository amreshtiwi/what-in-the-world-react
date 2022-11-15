import { Box } from "@mui/material";
import Countries from "./countriesSection/countriesSection";
import FavouritesSection from "./favouritesSection/FavouritesSection";

export default function FavAndCountriesSection() {
  return (
    <Box
      justifyContent={"space-between"}
      display={"flex"}
      mt={"72px"}
    >
      <FavouritesSection />
      <Countries />
      
    </Box>
  );
}
