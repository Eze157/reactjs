import React, { useState } from 'react';
import CartWidget from '../CartWidget/CartWidget';

const ItemCount = ({prop, stock}) => {
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

    return (
    <div className='container'>
        
        <div>
            <button onClick={Delete} className='button'>-</button> <CartWidget/> <button onClick={Add} className='button'>+</button><p> {count} </p>
        </div>
    </div>
    )
}

export default ItemCount;
