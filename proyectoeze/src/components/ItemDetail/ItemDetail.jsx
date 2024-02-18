import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({product}) => {
    return (

    <div key={product.id} className='Item'>
        <h2>{product.name}</h2>
        <img src={product.img} alt={product.nombre} />
        <h2>{product.price}</h2>

        <ItemCount prop={1} stock={product.stock}/>
    </div>

    )
}

export default ItemDetail;
