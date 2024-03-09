import React, {useContext, useState} from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import "./ItemDetail.css";


const ItemDetail = ({product}) => {

    const [cart,setCart] = useState(false)

    const {addToCart} = useContext(CartContext);

    const onAdd = (count) =>{
        setCart(true)

        addToCart(product,count)
    }

    return (
    <>
    <div className='Item'>
        <h2>{product.name}</h2>
        <img src={product.img} alt={product.nombre} />
        <h2>${product.price}</h2>
        <h2>{product.description}</h2>

        {product.stock == 0 
        ? 
        <>
        <h2>Sin stock</h2>
        <Link to={"/"}><button>Volver al inicio</button></Link>
        </>
        :
        (
            cart ? <Link to={'/cart'}><button>Ir al carrito de compras</button></Link> :
            <ItemCount prop={1} stock={product.stock} onAdd={onAdd}/> 
        )}

        
    </div>
    </>
    )
}

export default ItemDetail;
