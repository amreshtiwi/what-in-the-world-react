import { Card, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import {  useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import CardInfo from "./cardInfo";
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

const FavIconStar = styled(StarIcon)`
float: right;
display: block;
margin-top: -30px;
margin-right: 10px;
  ${breakpoint1("md")`
display: none !important;;
`}
`;

export default function CountryCard({ country , favourites,addToFavourites}) {
  const [opacity, setOpacity] = useState("1");
  const [star, setStar] = useState("lightgray");
  const _favourites = favourites;

  useEffect(() => {
    const c = _favourites.find((c) => c.cca2 === country.cca2);
    if (c) {
      setStar("orange");
    } else {
      setStar("lightgray");
    }
  }, [_favourites, country.cca2]);

  function dragStart(event) {
    event.dataTransfer.setData("Text", JSON.stringify(country));
    setOpacity("0.5");
  }

  function dragEnd() {
    setOpacity("1");
  }

  function addToList() {
    setStar(star === "orange" ? "lightgray" : "orange");
    addToFavourites(country, true);
  }

  return (
    <Grid xs={12} sm={6} lg={4}>
      <Card
        sx={{
          boxShadow: " 0 3px 10px -7px #858585",
          "&:hover": { cursor: "pointer" },
        }}
      >
        <Link
          to={`./details/${country.cca2}`}
          onDragStart={dragStart}
          onDragEnd={dragEnd}
          style={{ textDecoration: "none", opacity }}
        >
          <CardMedia
            height="160"
            component="img"
            alt={country.flag}
            image={country.flags.svg}
          />
        
        <CardInfo country={country} />
        </Link>
        <FavIconStar
          onClick={addToList}
          style={{
            color: star,
          }}
        />
      </Card>
    </Grid>
  );
}
