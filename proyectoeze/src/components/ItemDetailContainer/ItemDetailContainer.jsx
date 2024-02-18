import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product,setProduct] = useState([]);

    const{id} = useParams ();

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await fetch("../products.json");
                const data = await response.json();
                const products = data.find((p)=>p.id == id)
                setProduct(products);
            }catch (error){
                console.log(error)
            }
        }

        fetchData()
    },[id]);

    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer;
