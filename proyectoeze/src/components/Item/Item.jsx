import React from 'react';
import "./Item.css";
import { Link } from 'react-router-dom';

const Item = ({product}) => {

    console.log(product)
    return (
        <Link to={`/detalle/${product.id}`}>
            <div key={product.id} className='Item'>
                <h2 className='name'>{product.name}</h2>
                <img src={product.img} alt={product.nombre}/>
                <h2 className='price'>{product.price}</h2>
            </div>
        </Link>
    )
};

export default Item;
