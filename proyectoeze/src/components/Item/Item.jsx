import React from 'react';

const Item = ({product}) => {
    return (
        <div key={product.id}>
        <h2>{product.name}</h2>
        <img src={product.img} alt={product.nombre} />
        <h2>{product.price}</h2>
        <h2>{product.stock}</h2>
        </div>
    )
};

export default Item;
