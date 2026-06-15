import React, {useEffect, useState} from 'react';
import Header from "./header.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProducts, setSelectedProducts} from "../redux/slices/productSlice.jsx";
import store from "../redux/store.jsx";
import {addToBasket} from "../redux/slices/basketSlice.jsx";



const ProductDetail = () => {
const [count, setCount] = useState(1);
    const {id} = useParams();
    const dispatch = useDispatch();
const {products , selectedProducts} = useSelector(state => state.products);
const navigate = useNavigate();
useEffect(() => {
    if(products.length === 0) {
        dispatch(getProducts());
    }
    else{
        getProductsById();
    }
})

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    })

    const getProductsById = ()=>{
        products.map((product) =>{
            if (product.id === Number(id)) {
                dispatch(setSelectedProducts(product))
            }
        })
    }
    const {title, image, price,description} = selectedProducts;


    const increament =()=>{
        setCount(count + 1);
    }
    const decreament =()=>{
        if (count>1){
        setCount(count - 1);
        }
    }
    const addBasket = ()=>{
        const token = localStorage.getItem("token");
        const payload ={
            id,
            title,
            image,
            price,
            description,
            count
        }
        dispatch(addToBasket(payload));
    }


    return (
        <div>
            <Header/>
        <div
            style={{
                width: "700px",
                margin: "50px auto",
                border: "1px solid #ddd",
                padding: "20px",
                borderRadius: "10px",
            }}
        >
            <img
                src={image}
                alt={title}
                style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                }}
            />

            <h2>{title}</h2>

            <p>{description}</p>

            <h3>{price} ₺</h3>

            <button onClick={addBasket}>Sepete Ekle</button>
            <p onClick={increament}>+</p><p>{count}</p><p onClick={decreament}>-</p>
        </div>
        </div>
    );
};

export default ProductDetail;