
// import { CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../component/header';
import * as React from 'react';
import Home from './home';
import Details from './details';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='details' element={<Details/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
