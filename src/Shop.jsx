import React from "react";
import {Link} from 'react-router-dom'
import { useEffect, useState } from "react";



const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        return fetch(`https://fakestoreapi.com/products`).then(res => res.json())
        .then(json => setProducts(json))
    }
    return (
        <div>
            <h2>Shop</h2>
            <div className="d-felx flex-wrap justify-content-center">
                { products.map( product => {
                    console.log('product', product);
                    return (
                        <Link to={`/shop/${product.id}`} key={product.id} className="w-25 text-center mb-2 me-2 border">
                            <div className="d-flex justify-content-center mb-2">
                                <img className="w-25" src={product.image} alt="product img"></img>
                            </div>
                            <h4>{product.title}</h4>
                            <p>Price: {product.price} EGP</p>
                            <p>Rating: {product.rating.rate}</p> */
                        </Link>
                    )
                })}
            </div>
        </div>
    );
};

export default Shop;