import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../component/header";
import Details from "./details";
import Home from "./home";

const getURL = (searchValue) => {
  return (
    "https://restcountries.com/v3.1/" +
    (searchValue.trim() ? "name/" + searchValue : "all")
  );
};



export default function Container() {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const [currentCountries, setCurrentCountries] = useState([]);
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );

  

  useEffect(() => {
    //useEffect for search state
    let active = false;
    fetch(getURL(searchValue))
      .then((res) => {
        if (res.status === 200) return res.json();
        throw new Error();
      })
      .then((countries) => {
        if (!active) {
          !searchValue.trim() && setAllCountries(countries);

          const filteredCountries = filterCountries(countries);
          setCurrentCountries(filteredCountries);
        }
      })
      .catch(() => {
        setCurrentCountries([]);
      });

    return () => (active = true);
  }, [searchValue]);

  useEffect(() => {
    const filteredCountries = filterCountries(filterValue === "Favourites" ? favourites : allCountries);
    setCurrentCountries(filteredCountries);
  }, [filterValue]);



  const searchHandler = (_searchValue) => {
    let timer;
    function setting() {
      clearTimeout(timer);
      setSearchValue(_searchValue);
    }

    clearTimeout(timer);
    timer = setTimeout(setting, 500);
  };

  const filterHandler = (_filterValue) => {
    setFilterValue(_filterValue);
  };

  const filterCountries = (countries) => {
    let res = countries.filter((c) => {
      let isBelong = searchValue
        ? c.name.official.toLowerCase().includes(searchValue.toLowerCase())
        : c;
      if (filterValue && filterValue !== "Favourites") {
        isBelong = isBelong && c.region.includes(filterValue);
      }
      return isBelong;
    });
    return res;
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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              value={searchValue}
              searchHandler={searchHandler}
              filterHandler={filterHandler}
              addToFavourites={addToFavourites}
              removeFromFavourites={removeFromFavourites}
              countries={currentCountries}
              favourites={favourites}
            />
          }
        />
        <Route
          path="/details/:code"
          element={<Details />}
        />
      </Routes>
    </BrowserRouter>
  );
}
