import {CardContent, Typography} from "@mui/material";
import styled from "styled-components";

const InfoItem = styled(Typography)`
color: black;
font-weight: bold;
margin-left: 15px;
margin-right: 15px;
margin-bottom: -1px;
`;

const InfoItemValue = styled.span`
font-weight: 300;
`;


export default function CardInfo({country}) {

    

    return <CardContent sx={{height: '160px'}} >
        <Typography sx={{color:'black', fontWeight: 'bold',  fontSize: '22px',}}
                    gutterBottom variant="h1" component="div">
            {country.name.common}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            <InfoItem component={'span'}  style={{ marginTop: '6px'}}> Population :<InfoItemValue>{country.population.toLocaleString('en-US')}</InfoItemValue></InfoItem><br></br>
            <InfoItem component={'span'} > Region :<InfoItemValue>{country.region}</InfoItemValue></InfoItem><br></br>
            <InfoItem component={'span'}> Capital :<InfoItemValue>{country.capital}</InfoItemValue></InfoItem>
        </Typography>
    </CardContent>
}
