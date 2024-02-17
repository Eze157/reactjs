import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";


const NavBar = () => {
    

    return(
        <>
            <div className="navbar">
                <div className="link">
                    <Link className="link-nav"><span className="cas">Cas</span><span>Var</span></Link><br/>
                    <Link to='/' className="link-nav">Inicio</Link>
                    <Link className="link-nav">Peliculas</Link>
                    <Link className="link-nav">Series</Link>
                    <Link to={'/detalle'} className="link-nav">Información</Link>
                    <Link className="link-nav">Nosotros</Link>
                    <CartWidget/>
                </div>
            </div>
        </>
    )
}

export default NavBar;