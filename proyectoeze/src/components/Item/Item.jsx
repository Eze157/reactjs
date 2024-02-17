import React from 'react';
import "./Item.css";

const Item = ({product}) => {
    return (
        <>
        <div key={product.id} className='Item'>
        <h2>{product.name}</h2>
        <img src={product.img} alt={product.nombre} />
        <h2>{product.price}</h2>
        
        <button onClick={addEventListener} className='addCart'>Agregar al carrito</button> 
        </div>
        </>
    )
};

export default Item;
