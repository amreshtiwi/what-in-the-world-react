import {createContext, useEffect, useState} from "react";


const CountriesContext = createContext({
    countries: [],
    favourites: [],
    setFavourites: () => {
    },
    searchHandler: () => {
    },
    filterHandler: () => {
    },
    addToFavourites: () => {
    },
    removeFromFavourites: () => {
    },
});

const getURL = (searchValue) => {
    return 'https://restcountries.com/v3.1/' + (searchValue.trim() ? 'name/' + searchValue : 'all')
}

export const CountriesContextProvider = (props) => {

    const [allCountries, setAllCountries] = useState([]);
    const [currentCountries, setCurrentCountries] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [filterValue, setFilterValue] = useState('');
    const [favourites, setFavourites] = useState(JSON.parse(localStorage.getItem('fav')) || []);

    useEffect(() => {

        let active = false;
        fetch(getURL(searchValue))
            .then(res => {
                if (res.status === 200)
                    return res.json();
                throw new Error();
            })
            .then(countries => {
                if (!active) {
                    const filteredCountries = countries.filter((c) => {
                        return filterValue ? c.region.includes(filterValue) : c;
                    });
                    setCurrentCountries(filteredCountries);
                    !(searchValue.trim()) && setAllCountries(countries);
                }
            })
            .catch(() => {
                setCurrentCountries([]);
            });

        return () => (active = true);

    }, [searchValue]);

    const searchHandler = () => {
        let timer;

        return function (searchValue) {

            function setting() {
                clearTimeout(timer);
                setSearchValue(searchValue);
            }

            clearTimeout(timer);
            timer = setTimeout(setting, 500);
        };
    }
    const returnedSearchHandler = searchHandler();

    const filterHandler = (filterValue) => {
        setFilterValue(filterValue);

        let countries = filterCountries(filterValue === 'Favourites' ? favourites : allCountries, searchValue, filterValue);
        setCurrentCountries(countries);

    }
    const filterCountries = (countries, searchValue, filterValue) => {
        let res = countries.filter((c) => {
            let isBelong = searchValue ? c.name.official.toLowerCase().includes(searchValue.toLowerCase()) : c;
            if (filterValue && filterValue !== 'Favourites') {
                isBelong = isBelong && c.region.includes(filterValue);
            }
            return isBelong;
        });
        return res;
    }
    const addToFavourites = (newCountry, isAStarClicked) => {
        const country = favourites.find(c => c.cca2 === newCountry.cca2);

        if (!country) {
            const list = [...favourites, newCountry];
            setFavourites(list);
            try {
                localStorage.setItem('fav', JSON.stringify(list));
            } catch (e) {
                alert(e);
            }
        } else if (isAStarClicked) {
            removeFromFavourites(country.name.common);
        }
    }
    const removeFromFavourites = (name) => {
        const countries = favourites.filter(c => c.name.common !== name);
        setFavourites(countries);
        try {
            localStorage.setItem('fav', JSON.stringify(countries));
        } catch (e) {
            alert(e);
        }
    }

    const countriesContextValue = {
        countries: currentCountries,
        searchHandler: returnedSearchHandler,
        filterHandler,
        setFavourites,
        favourites,
        addToFavourites,
        removeFromFavourites,
    };

    return <CountriesContext.Provider value={countriesContextValue}>{props.children}</CountriesContext.Provider>
}

export default CountriesContext;
