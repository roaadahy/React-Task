import React from 'react';
import {Link} from 'react-router-dom'
import img from "./logo.png"
const Navbar = () => {
    return (
        <div className="d-flex justify-content-around mb-3">
           <img src={img} alt="logo" width="30" height="30"></img>
           <ul className="d-flex justify-content-between" style={{listStyle: 'none'}}>
                <li className="mx-2">
                    <Link to="/">Home</Link>
                </li>

                <li className="mx-2">
                    <Link to="/shop">Shop</Link>
                </li>

                <li className="mx-2">
                    <Link to="/counter">Counter</Link>
                </li>
           </ul>

        </div>
    )
}

export default Navbar;
