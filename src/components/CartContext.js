import {createContext,useState } from 'react';

export const CartContext=createContext();

const CartContextProvider=({children})=>{
    const [cartList,setCartList]=useState([]);
    const [totalI,setTotalI]=useState(0);

    const addToCart=(item,cantidad)=>{
        let encontrado=cartList.find(elem=>elem.id===item.id)

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
        }
    };
    const removeItem=(id)=>{
    setCartList(cartList.filter((cartItem)=>cartItem.id!==id));
    let encontrado=cartList.find((cartItem)=>cartItem.id===id)
    setTotalI(totalI-encontrado.cantidadItems);
    };
    const isInCart=(id)=>{
    return cartList.find((cartItem)=>cartItem.id===id)
    };
    const clear=()=>{
    setCartList([]);
    setTotalI(0);
    };
    const calcularCantidadItems=(valor)=>{
        setTotalI(totalI+valor);  
}
    const totalCost=cartList.map(elem => elem.price*elem.cantidadItems);  

    return (
<CartContext.Provider value={{cartList,addToCart,removeItem,isInCart,clear,calcularCantidadItems,totalI,setTotalI,totalCost}}>
{children}
</CartContext.Provider>
    );
}
export default CartContextProvider;