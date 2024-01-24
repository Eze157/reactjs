import React from 'react';
import "./ItemListContainer.css"

const ItemListContainer = ({greeting}) => {
    return (
    <>
        <p className="greeting">{greeting}</p>
    </>
    )
}

export default ItemListContainer;
