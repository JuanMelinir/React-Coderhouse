import {createContext,useState } from 'react';

export const CartContext=createContext();

const CartContextProvider=({children})=>{
    const [cartList,setCartList]=useState([]);
    
    const addToCart=(item,cantidad)=>{
        /*const isInCart=cartList.find((cartItem)=>cartItem.id===parseInt(item.id));*/

        if(isInCart(item.id)){
        setCartList(cartList.map((cartItem)=>{
        return {...cartItem,cantidad:cartItem.cantidad+cantidad}
        })
        );
        }else{
            setCartList([
                ...cartList,{
                id:item.id,
                title:item.title,
                pictureUrl:item.pictureUrl,
                price:item.price,
                cantidad:cantidad
            }]);
        }
    };
    const removeItem=(id)=>{
    setCartList(cartList.filter((item)=>item.id!==id));
    };
    const isInCart=(id)=>{
    return cartList.find((cartItem)=>cartItem.id===parseInt(id))
    };
    const clear=()=>{
    setCartList([]);
    };
    return (
<CartContext.Provider value={{cartList,addToCart,removeItem,isInCart,clear}}>
{children}
</CartContext.Provider>
    );
}
export default CartContextProvider;