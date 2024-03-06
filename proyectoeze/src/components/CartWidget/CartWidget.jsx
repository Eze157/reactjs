import React, { useContext } from 'react';
import "./CartWidget.css";
import { CartContext } from '../../context/cartContext';

const CartWidget = () => {
    
    const {quantityCart} = useContext(CartContext)

    return (
        <>
        <img src="../asset/img/cart.png" alt="" className='cart'/>
        <p className='size'>{quantityCart() == 0 ? null : quantityCart()}</p>
        </>
    )
}

export default CartWidget;
