import {createContext,useState } from 'react';

export const CartContext=createContext();

const CartContextProvider=({children})=>{
    const [cartList,setCartList]=useState([]);
    
    const addToCart=(item,cantidad)=>{
        let encontrado=cartList.find((cartItem)=>cartItem.id===item.id)
        if(encontrado===undefined){
            setCartList([
                ...cartList,{
                id:item.id,
                title:item.title,
                pictureUrl:item.pictureUrl,
                price:item.price,
                cantidadItems:cantidad
            }]);
        }else{
            encontrado.cantidadItems+=cantidad;
            console.log(encontrado.cantidadItems)
        }
    };
    const removeItem=(id)=>{
    setCartList(cartList.filter((cartItem)=>cartItem.id!==id));
    };
    const isInCart=(id)=>{
    return cartList.find((cartItem)=>cartItem.id===id)
    };
    const clear=()=>{
    setCartList([]);
    };
    const calcularCantidadItems=()=>{
    let cantidades=cartList.map((cartItem)=>cartItem.cantidadItems); 
    return cantidades.reduce(((acumulador,valorActual)=>acumulador+valorActual),0);
    }
    return (
<CartContext.Provider value={{cartList,addToCart,removeItem,isInCart,clear,calcularCantidadItems}}>
{children}
</CartContext.Provider>
    );
}
export default CartContextProvider;