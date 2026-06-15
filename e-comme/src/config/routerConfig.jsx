import {Route, Router, Routes} from 'react-router-dom'


import React from 'react';
import App from "../App.jsx";
import Home from "../pages/home.jsx";
import ProductDetail from "../components/productDetail.jsx";
import Login from "../pages/login.jsx";
import Register from "../pages/register.jsx";

const RouterConfig = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/product-detail/:id" element={<ProductDetail/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </div>
    );
};

export default RouterConfig;