import React, { useContext, useState } from 'react';
import "./Checkout.css"
import { db } from '../../firebase/config';
import { collection,addDoc,updateDoc,getDoc,doc } from 'firebase/firestore';
import { CartContext } from '../../context/cartContext';

const Checkout = () => {

    const {cart,totalCart,emptyCart} = useContext(CartContext);
    
    const [name,setName] = useState("");
    const [nickname,setNickname] = useState("");
    const [email,setEmail] = useState("");
    const [confirEmail,setConfirmEmail] = useState("");
    const [numberPhone,setNumberPhone] = useState("");
    const [error,setError] = useState("");
    const [orderId,setOrderId] = useState("");

    const hi = (event) =>{

        event.preventDefault();

        if(!name || !nickname || !email || !confirEmail || !numberPhone){
            setError("* Por favor completar los campos restantes")
            return;
        }

        if(email !== confirEmail){
            setError("El email y email de confirmación no coinciden. Ingrese correctamente.")
            return;
        }

            const order = {
                items: cart.map((product) => ({
                    id: product.product.id,
                    nombre: product.product.name,
                    cantidad: product.quant
                })),
                total: totalCart(),
                date: new Date(),
                name,
                nickname,
                numberPhone,
                email
            }
    
            Promise.all(
                order.items.map(async (productOrder) => {
                    const productoRef = doc(db,"products",productOrder.id);
                    const productoDoc = await getDoc(productoRef);
            
                    if (productoDoc.exists()) {
                        const stockActual = productoDoc.data().stock;
            
                        if (stockActual !== undefined) {
                            await updateDoc(productoRef, {
                                stock: stockActual - productOrder.cantidad
                            });
                        } else {
                            console.error(`El producto ${productOrder.id} no tiene un valor de stock definido.`);
                        }
                    } else {
                        console.error(`El producto ${productOrder.id} no existe en la base de datos.`);
                    }
                })
            )
            

            .then(() => {
                addDoc(collection(db,"orders"),order)
                .then((docRef) => {
                    setError("")
                    setOrderId(docRef.id)
                    emptyCart()
                })
                .catch((error) => {
                    console.log(error)
                    setError("No se pudo generar la orden de compra")
                })
    
            })
            .catch((error) => {
                console.log(error)
                setError("Error al intentar actualizar el stock")
            })
        }
    
    return (
    <div>
        <h1>Formulario de finalizacion de compra</h1> 
            <form onSubmit={hi}>
                {cart.map((product)=>{
                    <div key={product.product.id}>
                        <p>
                            {""}
                            {product.product.id} x {product.quant}
                        </p>
                    </div>
                    })}
            <div className='forms'>
                <input type="text" placeholder='Nombre *' onChange={(e)=> setName(e.target.value)}/>
                <input type="text" placeholder='Apellido *' onChange={(e)=> setNickname(e.target.value)}/>
                <input type="email" placeholder='Email *' onChange={(e)=> setEmail(e.target.value)}/>
                <input type="email" placeholder='Confirmar Email *' onChange={(e)=> setConfirmEmail(e.target.value)}/>
                <input type="text" placeholder='Numero de telefono *' onChange={(e)=> setNumberPhone(e.target.value)}/>
                <button type='submit'>Finalizar Compra</button>
                {error && <p style={{color: "red", fontSize: 20, margin: 10, textAlign: "center"}}>{error}</p>}
                {orderId && (
                    <h2>Muchas Gracias por su compra! Id: {orderId}</h2>
                )}
            </div>
            </form>
    </div>
    )
}

export default Checkout;
