import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";


const NavBar = () => {
    

    return(
        <>
        <p className="name">Cas<span>Var</span></p>
        <ul>
            <li><a href="">Inicio</a></li>
            <li><a href="">Productos</a></li>
            <li><a href="">Nosotros</a></li>
            <li><a href="">Contactanos</a></li>
        </ul>

        <CartWidget/>
        </>
    )
}

export default NavBar;