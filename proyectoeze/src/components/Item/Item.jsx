import React from 'react';
import "./Item.css";
import { Link } from 'react-router-dom';

const Item = ({product}) => {

    return (
        <Link to={`/detalle/${product.id}`} className='Item'>
            <div key={product.id}>
                <h2>{product.name}</h2>
                <img src={product.img} alt={product.nombre}/>
            </div>
        </Link>
    )
};

export default Item;
