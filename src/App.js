// import { CssBaseline } from '@mui/material';
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/header";
import Home from "./pages/home";
import Details from "./pages/details";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={
            <Home/>
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

export default App;
