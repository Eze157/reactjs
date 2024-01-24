import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";


const NavBar = () => {
    

    return(
        <>
        <p className="name">Cas<span>Var</span></p>
        <ul>
            <li><a>Inicio</a></li>
            <li><a>Productos</a></li>
            <li><a>Nosotros</a></li>
            <li><a>Contactanos</a></li>
        </ul>

        <CartWidget/>
        </>
    )
}

export default NavBar;