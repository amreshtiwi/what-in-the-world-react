import Grid from "@mui/material/Unstable_Grid2";
import styled from "styled-components";
import CountryCard from "./card";

const StyledGrid = styled(Grid)`
height: 600px;
overflow: auto;
`;

export default function Countries(props) {



    return <StyledGrid container md={9} rowSpacing={7} columnSpacing={7}>
        {props.countries.map((country) =>
            <CountryCard key={country.cca2} country={country} favourites={props.favourites} addToFavourites={props.addToFavourites}/>
        )}
    </StyledGrid>;
}
