import React from 'react';
import "./Item.css";
import { Link } from 'react-router-dom';

const Item = ({product}) => {

    console.log(product)
    return (
        <Link to={`/detalle/${product.id}`} className='Item'>
            <div key={product.id}>
                <h2>{product.name}</h2>
                <img src={product.img} alt={product.nombre}/>
                <h2>{product.description}</h2>
            </div>
        </Link>
    )
};

export default Item;
