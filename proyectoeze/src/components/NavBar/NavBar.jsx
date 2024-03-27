import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";


const NavBar = () => {
    

    return(
        <>
            <div className="navbar">
                <div className="link">
                    <Link to='/' className="link-nav"><span className="cas">Cas</span><span>Var</span></Link><br/>
                    <Link to='/' className="link-nav">Inicio</Link>
                    <Link to='/category/peliculas' className="link-nav">Peliculas</Link>
                    <Link to='/category/series' className="link-nav">Series</Link>
                    <Link to={'/cart'} className="nav">
                            <CartWidget/>
                        </Link>
                </div>
            </div>
        </>
    )
}

export default NavBar;