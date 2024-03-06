import React, {useState, createContext} from "react";

export const CartContext = createContext();

const CartProvider = ({children}) =>{

    const [cart,setCart] = useState([]);

    const addToCart = (product,quant) =>{
        const itemExistInCart = cart.findIndex(prod => prod.product.id == product.id)

        if(itemExistInCart == -1){
            setCart([...cart,{product,quant}]) 
        }else{
            const newCart = [...cart]
            newCart[itemExistInCart].quant += quant
            setCart(newCart)
        }
    }

    const removeFromCart = (productId) =>{
        const newCart = cart.filter(item=>item.product.id !== productId);
        setCart(newCart);
    }

    const emptyCart = () =>{
        setCart([]);
    }

    const quantityCart = () =>{
        const totalQuantity = cart.reduce((total,item)=> total+item.quant,0);
        return totalQuantity;
    }

    const totalCart = () =>{
        const finalPrice = cart.reduce((total,item)=> total+ (item.product.price * item.quant),0);
        return finalPrice;
    }
    
    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            emptyCart,
            quantityCart,
            totalCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;