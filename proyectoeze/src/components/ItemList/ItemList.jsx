import React from 'react';
import Item from '../Item/Item';
import "./ItemList.css"

const ItemList = ({products}) => {
    return (
    <div className='ItemList'>
        {
            products.map((product)=>{
                return(
                    <Item product={product}/>
                )
            })
        }
    </div>
    )
}

export default ItemList;

