import React, { useState } from 'react';
import "./ItemCount.css"

const ItemCount = ({prop, stock, onAdd}) => {
    const [count,setCount] = useState(1)

    const Delete = ()=>{
        if (count > prop)(
        setCount(count -1)
        )
    }

    const Add = ()=>{
        if (count < stock)(
        setCount(count +1)
        )
    }

    const Cart =()=>{
        onAdd(count)
    }

    return (
    <div>
        
        <div className='counter'>
            <button onClick={Delete} className='button'>-</button> {count} <button onClick={Add} className='button'>+</button>
            <br /><br />
            <button onClick={Cart}>Agregar al carrito</button>
        </div>
    </div>
    )
}

export default ItemCount;
