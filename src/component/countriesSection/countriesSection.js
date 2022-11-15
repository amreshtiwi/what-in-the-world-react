import Grid from "@mui/material/Unstable_Grid2";
import {useContext} from "react";
import styled from "styled-components";
import CountriesContext from "../../container-context/CountriesContainer";
import CountryCard from "./card";

const StyledGrid = styled(Grid)`
height: 600px;
overflow: auto;
`;

export default function Countries() {

    const countriesContext = useContext(CountriesContext);

    return <StyledGrid container md={9} rowSpacing={7} columnSpacing={7}>
        {countriesContext.countries.map((country) =>
            <CountryCard key={country.cca2} country={country}/>
        )}
    </StyledGrid>;
}
