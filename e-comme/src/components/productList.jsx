import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../redux/slices/productSlice.jsx";
import Products from "./products.jsx";
import store from "../redux/store.jsx";






const ProductList = () => {
    const {products} = useSelector((store) => store.products);
    const search = useSelector((state) => state.products.search);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const filtered = products.filter(product => (
        product.title.toLowerCase().includes(search.toLowerCase())
    ) )

    return (
        <div style={{display:'grid' ,gridTemplateColumns:'repeat(4,1fr)'}}>
            {
                filtered.map((product) => (
                    <Products key={product.id} product={product} />
                ))
            }
        </div>
    );
};

export default ProductList;