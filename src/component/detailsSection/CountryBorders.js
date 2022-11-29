import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Border from "./border";



const BorderItem = styled(Box)`
display: flex;
flex-wrap: wrap;
margin-bottom: 30px;
align-items: center;
gap: 5px;
`;
export default function CountryBorders({ borders }) {
  const labelStyle = { marginBottom: "12px", fontWeight: "600" };

  const URL =
    "https://restcountries.com/v3.1/alpha?codes=" + borders.toString();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((countries) => setCountries(countries));
  }, [URL]);

  return (
    <BorderItem>
      <label style={labelStyle}>Border countries:</label>
      <BorderItem>
        {countries.map((country) => (
          <Border
            key={country.cca2}
            name={country.name.common}
            cca2={country.cca2}
          />
        ))}
      </BorderItem>
    </BorderItem>
  );
}
