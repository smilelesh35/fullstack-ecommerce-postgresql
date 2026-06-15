import React from 'react';
import {useNavigate} from "react-router-dom";

const Products = ({product}) => {


    const {id,title, price ,image} = product;

    const navigate = useNavigate();
    return (
        <div>
                <div style={{display: 'flex',flexDirection:'column', alignItems: 'center',border:'1px solid black', width:'250px' ,height:'350px'}}>
                    <img src={image} style={{width:'100px',height:'130px'}} alt=""/>
                    <h3>{title}</h3>
                    <p>{price} $</p>
                    <button onClick={()=>{navigate("/product-detail/" +id)}}>Detaya git</button>
                </div>
        </div>
    );
};

export default Products;