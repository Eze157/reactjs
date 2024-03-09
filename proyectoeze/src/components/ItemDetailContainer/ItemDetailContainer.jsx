import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { db } from '../../firebase/config';
import { doc,getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    
    const [product,setProduct] = useState([]);

    const{id} = useParams ();

    useEffect(() =>{
    
    const newD = doc(db,"products",id)

    getDoc(newD).then(res=>{
        const data = res.data();
        const newP = {id: res.id,...data};
        setProduct(newP);
        })
        .catch(error => console.log(error))
    },[])

    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer;
