import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = (id) => {
    const [product,setProduct] = useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await fetch("./products.json");
                const data = await response.json();
                const product = data.find((p)=>p.id == id)
                setProduct(data);
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