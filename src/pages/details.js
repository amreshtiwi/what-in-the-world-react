import { Box, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { createBreakpoint } from "styled-components-breakpoint";
import styled from "styled-components";
import CountryFlag from "../component/detailsSection/countryFlag";
import Info from "../component/detailsSection/CountryInfo";
import { useEffect, useState } from "react";

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const breakpoint1 = createBreakpoint(breakpoints);

const DetailsBox = styled(Box)`
  ${breakpoint1("xs")`
  margin-top: 100px;
  margin-right: 50px;
  margin-left: 50px;
  `}
  ${breakpoint1("md")`
  margin: 100px;
  `}
`;

const DetailsInfo = styled(Box)`
display: flex;
justify-content: space-between;
align-self: center;
${breakpoint1("xs")`
flex-direction: column;
flex-wrap: wrap;
margin-top: 30px;
`}
${breakpoint1("md")`
flex-direction: row;
margin-top: 60px;
margin-right: 72px;
`}
`;

export default function Details() {
  const navigate = useNavigate();
  const { code } = useParams();
  const [country, setCountry] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const alphaURL = "https://restcountries.com/v3.1/alpha/" + code;

  useEffect(() => {
    fetch(alphaURL)
      .then((res) => res.json())
      .then((res) => {
        setCountry(res[0]);
        setIsLoaded(true);
      });
  }, [code]);

  return (
    <DetailsBox>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/")}
        sx={{
          backgroundColor: "white",
          color: "black",
          boxShadow: "0 3px 10px -7px #858585",
        }}
      >
        {" "}
        Back
      </Button>

      <DetailsInfo>
        {isLoaded && (<CountryFlag cca2={country.cca2} src={country.flags.svg} />)}
        {isLoaded && <Info country={country} />}
      </DetailsInfo>
    </DetailsBox>
  );
}
