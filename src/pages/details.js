import { Box, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";
import { createBreakpoint } from "styled-components-breakpoint";
import styled from "styled-components";
import CountryFlag from "../component/detailsSection/countryFlag";
import Info from "../component/detailsSection/CountryInfo";

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

export default function Details() {
  const navigate = useNavigate();
  const { code } = useParams();
  const URL = "https://restcountries.com/v3.1/alpha/" + code;
  const [country, setCountry] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        setCountry(res[0]);
        setIsLoaded(true);
      });
  }, [URL]);

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

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignSelf={"center"}
        flexWrap={"wrap"}
        ml={"72px"}
        mr={"72px"}
        mt={"60px"}
      >
        {isLoaded && (<CountryFlag cca2={country.cca2} src={country.flags.svg} />)}
        {isLoaded && <Info country={country} />}
      </Box>
    </DetailsBox>
  );
}
