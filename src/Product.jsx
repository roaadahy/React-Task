import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
const Product = ({ match }) => {

    const [product, setProduct] = useState(null);
    useEffect(() => {
        getProductDetails();
    }, []);

    const getProductDetails = () => {
        return fetch(`https://fakestoreapi.com/products/${match.params.id}`)
            .then((res) => res.json()).then((json) => setProduct(json));
    };

    return (
        <div>
            {product ?
                <div className="d-flex align-items-center justify-content-center flex-wrap containr">
                    <div className="w-25 me-4">
                        <img className="w-100" src={product.image} alt="product img"></img>
                    </div>
                    <div>
                        <h2 className="text-dark">{product.title}</h2>
                        <p className="text-primary">Category: {product.category}</p>
                        <p className="text-danger">Price: {product.price} EGP</p>
                        <p className="text-warning">Rating: {product.rating.rate}</p>
                    </div>
                </div>
                :
                <Spinner animation="border-grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>

            }

        </div>


    )
};

export default Product;
