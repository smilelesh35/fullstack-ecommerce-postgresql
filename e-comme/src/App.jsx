import React, {useState} from 'react';
import Container from '@mui/material/Container';

import ProductList from "./components/productList.jsx";
import Products from "./components/products.jsx";
import Header from './components/header.jsx';
import Home from "./pages/home.jsx";
import {BrowserRouter} from "react-router-dom";
import RouterConfig from "./config/routerConfig.jsx";



const App = () => {

    return (
      <div>
    <BrowserRouter>
          <Container>
              <RouterConfig></RouterConfig>
          </Container>
    </BrowserRouter>
      </div>
    );
};

export default App;