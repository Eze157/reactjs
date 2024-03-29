import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import "./Cart.css"

const Cart = () => {

    const {cart,removeFromCart,emptyCart,totalCart} = useContext(CartContext)

    return (
    <div className='container3'>
        {cart.length == 0 
        
        ?
        
        <><h2>El carrito esta vacio</h2><Link to={"/"} className='Init'>Ir al inicio</Link></> 
        
        : 
        
        <>{cart.map((p)=>(
        <CartItem key={p.product.id} product={p} removeFromCart={removeFromCart}/>
        ))}
        <p className='totalPrice'>Total: ${totalCart()}</p>
        <button onClick={emptyCart} className='emptyCart'>Vaciar Carrito</button>
        <Link to={'/checkout'}><button className='finish'>Finalizar compra</button></Link>
        </>
        }
    </div>
    )
}

export default Cart;
