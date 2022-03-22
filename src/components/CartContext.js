import {createContext,useState } from 'react';

export const CartContext=createContext();

const CartContextProvider=({children})=>{
    const [cartList,setCartList]=useState([]);
    const [totalI,setTotalI]=useState(0);

    const addToCart=(item,amount)=>{
        let found=cartList.find(elem=>elem.id===item.id)

        if(found===undefined){
            setCartList([
                ...cartList,{
                id:item.id,
                title:item.title,
                pictureUrl:item.pictureUrl,
                price:item.price,
                quantityItems:amount
            }]);
        }else{
            found.quantityItems+=amount;
        }
    };
    const removeItem=(id)=>{
    setCartList(cartList.filter((cartItem)=>cartItem.id!==id));
    let found=cartList.find((cartItem)=>cartItem.id===id)
    setTotalI(totalI-found.quantityItems);
    };
    const isInCart=(id)=>{
    return cartList.find((cartItem)=>cartItem.id===id)
    };
    const clear=()=>{
    setCartList([]);
    setTotalI(0);
    };
    const  calculateAmountItems=(valor)=>{
        setTotalI(totalI+valor);  
}
    const totalCost=cartList.map(elem => elem.price*elem.quantityItems);  

    return (
<CartContext.Provider value={{cartList,addToCart,removeItem,isInCart,clear, calculateAmountItems,totalI,setTotalI,totalCost}}>
{children}
</CartContext.Provider>
    );
}
export default CartContextProvider;