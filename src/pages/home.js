import { Box } from "@mui/system";
import styled from "styled-components";
import FavAndCountriesSection from "../component/favAndCountriesSection";
import SearchFilterSection from "../component/searchFilterSection/searchFilterSection";
import { createBreakpoint } from "styled-components-breakpoint";
import { useEffect, useState } from "react";

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const breakpoint1 = createBreakpoint(breakpoints);

const HomeBox = styled(Box)`
  ${breakpoint1("xs")`
margin-top: 100px;
margin-right: 50px;
margin-left: 50px;
`}
  ${breakpoint1("md")`
margin: 100px;
`}
`;

const getURL = (searchValue) => {
  return (
    "https://restcountries.com/v3.1/" +
    (searchValue.trim() ? "name/" + searchValue : "all")
  );
};

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const [currentCountries, setCurrentCountries] = useState([]);
  const [filterdCountries, setFilterdCountries] = useState([]);
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );

  

  useEffect(() => {
    //useEffect for search stat
    let active = false;
    fetch(getURL(searchValue))
      .then((res) => {
        if (res.status === 200) return res.json();
        throw new Error();
      })
      .then((countries) => {
        if (!active) {
          !searchValue.trim() && setAllCountries(countries);
          setCurrentCountries(countries);
        }
      })
      .catch(() => {
        setCurrentCountries([]);
      });

    return () => (active = true);
  }, [searchValue]);

  useEffect(() => {
    let countries = filterValue === "Favourites" ? favourites : currentCountries;
    let res = countries.filter((c) => {
      let isBelong =  c;
      if (filterValue && filterValue !== "Favourites") {
        isBelong = isBelong && c.region.includes(filterValue);
      }
      return isBelong;
    });
    setFilterdCountries(res);
  }, [filterValue,currentCountries,favourites]);



  const searchHandler = (_searchValue) => {
      setSearchValue(_searchValue);
  };

  const filterHandler = (_filterValue) => {
    setFilterValue(_filterValue);
  };



  const addToFavourites = (newCountry, isAStarClicked) => {
    const country = favourites.find((c) => c.cca2 === newCountry.cca2);

    if (!country) {
      const list = [...favourites, newCountry];
      setFavourites(list);
      try {
        localStorage.setItem("fav", JSON.stringify(list));
      } catch (e) {
        alert(e);
      }
    } else if (isAStarClicked) {
      removeFromFavourites(country.name.common);
    }
  };
  const removeFromFavourites = (name) => {
    const countries = favourites.filter((c) => c.name.common !== name);
    setFavourites(countries);
    try {
      localStorage.setItem("fav", JSON.stringify(countries));
    } catch (e) {
      alert(e);
    }
  };
  return (
    <HomeBox>
      <SearchFilterSection
        value={searchValue}
        searchHandler={searchHandler}
        filterHandler={filterHandler}
      />
      <FavAndCountriesSection
        favourites={favourites}
        addToFavourites={addToFavourites}
        removeFromFavourites={removeFromFavourites}
        countries={filterdCountries}
      />
    </HomeBox>
  );
}
