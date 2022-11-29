import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { createBreakpoint } from "styled-components-breakpoint";
import FavList from "./favList";

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const breakpoint1 = createBreakpoint(breakpoints);

const StyledBox = styled(Box)`
  box-shadow: 0 0 5px -2px #858585;
  border-radius: 5px;
  width: 25%;
  height: 600px;
  margin-right: 15px;
  display: none;
  background-color: white;
  ${breakpoint1("md")`
display: flex;
flex-direction: column;
`}
`;

export default function FavouritesSection(props) {
  return (
    <StyledBox>
      <Typography variant={"h1"} mt={2} ml={3} mr={3} fontSize={'24px'} fontWeight={"bold"}>
        Favourites
      </Typography>
      <FavList favourites = {props.favourites} addToFavourites={props.addToFavourites} removeFromFavourites={props.removeFromFavourites}></FavList>
    </StyledBox>
  );
}
