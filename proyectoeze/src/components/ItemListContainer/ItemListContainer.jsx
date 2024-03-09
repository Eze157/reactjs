import React, {useState, useEffect} from 'react';
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'; 
import { db } from '../../firebase/config';
import { collection,getDocs,query,where } from 'firebase/firestore';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    const {categoryId} = useParams()

    useEffect(()=>{

    const productCollection = 
    categoryId
    ?
    query(collection(db,"products"),where("category","==",categoryId))
    :
    collection(db,"products")
    
    getDocs(productCollection).then((res)=>{
        const newProducts = res.docs.map((doc)=>{
            const data = doc.data()
            return {id: doc.id,...data}
        })
        setProducts(newProducts)
    })
    .catch((error)=> console.log(error))
    },[categoryId])

    return (
        <div className='itemListContainer'>

            {
                products.length == 0 
                ? 
                <h1>loading..</h1> 
                :
                <ItemList products={products}/>
            }   
        </div>
    )
}

export default ItemListContainer;
