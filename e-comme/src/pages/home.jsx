import React, {useEffect} from 'react';
import ProductList from "../components/productList.jsx";
import Header from "../components/header.jsx";
import {useNavigate} from "react-router-dom";

const Home = () => {


    const navigate = useNavigate();


    useEffect(() => {
        const token = localStorage.getItem("token");

        if(!token){
            navigate("/login");
        }
    },[])
    return (
        <div>
            <Header />
            <ProductList />

        </div>
    );
};

export default Home;