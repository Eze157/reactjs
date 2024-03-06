import React from 'react';
import "./CartItem.css";

const CartItem = ({product,removeFromCart}) => {
    return (
    <div className='cartItem'>
        <h2>{product.product.name}</h2>
        <img src={product.product.img} alt={product.product.nombre} />
        <h2>{product.quant}</h2>
        <h2>${product.product.price*product.quant}</h2>
        <button onClick={()=> removeFromCart(product.product.id)}>Eliminar Producto</button>
    </div>
    )
}

export default CartItem;
