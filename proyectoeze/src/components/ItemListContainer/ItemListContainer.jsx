import React, {useState, useEffect} from 'react';
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'; 

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    const {categoryId} = useParams()

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await fetch("../products.json");
                const data = await response.json();
                
                if(categoryId){
                    const filterCategory = data.filter((p)=>p.category == categoryId)
                    setProducts(filterCategory);
                }else{
                    setProducts(data);
                }
                
            }catch (error){
                console.log(error)
            }
        }

        fetchData()
    },[categoryId])

    return (
    <>
        <div className='itemListContainer'>

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
