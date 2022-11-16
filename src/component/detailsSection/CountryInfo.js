import {Box, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import InfoItem from "./infoItem";
import CountryBorders from "./CountryBorders";
import styled from "styled-components";
import { createBreakpoint } from "styled-components-breakpoint";

const breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  };
  
const breakpoint1 = createBreakpoint(breakpoints);

const InfoBox = styled(Box)`
margin-top: 40px;
${breakpoint1("xs")`
width: 100%;
`}
${breakpoint1("md")`
width: 45%;
`}
`;
export default function Info({country}) {

    const [borders, setBorders] = useState();


    useEffect(() => {
        setBorders(country.borders);
    }, [country]);

    return <InfoBox >
        <Typography fontWeight={600} mb={'25px'} variant={"h5"}>
            {country.name.common}
        </Typography>
        <Box display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"}>
            <Box display={"flex"} flexDirection={"column"} marginBottom={'65px'}>
                <InfoItem label={'Native Name:'} value={Object.values(country.name.nativeName)[0].common}/>
                <InfoItem label={'Population:'} value={country.population.toLocaleString('en-US')}/>
                <InfoItem label={'Region:'} value={country.region}/>
                <InfoItem label={'Sub Region:'} value={country.subregion}/>
                <InfoItem label={'Capital:'} value={country.capital ? country.capital[0] : '-'}/>
            </Box>
            <Box display={"flex"} flexDirection={"column"}>
                <InfoItem label={'Top Level Domain:'} value={country.tld[0]}/>
                <InfoItem label={'Currencies:'} value={Object.values(country.currencies)[0].name}/>
                <InfoItem label={'Languages:'} value={Object.values(country.languages)[0]}/>
            </Box>
            {borders && <CountryBorders borders={borders}/>}
        </Box>
    </InfoBox>;
}
