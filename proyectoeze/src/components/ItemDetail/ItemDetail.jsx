import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({product}) => {
    return (

    <div key={product.id} className='Item'>
        <h2>{product.name}</h2>
        <img src={product.img} alt={product.nombre} />
        <h2>{product.price}</h2>
        <h2>{product.description}</h2>

        <ItemCount prop={1} stock={product.stock}/>
        <button onClick={addEventListener}>Agregar al carrito</button>
    </div>

    )
}

export default ItemDetail;
