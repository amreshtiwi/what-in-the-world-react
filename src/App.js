// import { CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/header";
import * as React from "react";
import Home from "./pages/home";
import Details from "./pages/details";
import { CountriesContextProvider } from "./container-context/CountriesContainer";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={
            <CountriesContextProvider>
              <Home />
            </CountriesContextProvider>
          }
        />
        <Route path="/details/:code" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
