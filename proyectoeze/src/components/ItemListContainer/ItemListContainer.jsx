import React, {useState, useEffect} from 'react';
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await fetch("./products.json");
                const data = await response.json();
                setProducts(data);
            }catch (error){
                console.log(error)
            }
        }

        fetchData()
    },[])

    return (
    <>
        <div className='itemListContainer'>
            <p>{greeting}</p>

            {
                products.length == 0 
                ? 
                <h1>loading..</h1> 
                :
                <ItemList products={products}/>
            }   
        </div>
    </>
    )
}

export default ItemListContainer;
