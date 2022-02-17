import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
const {elements} = require("./Productos");
const ItemDetailContainer =()=>{
//TODO:Muestro los detalles del producto en la posición 1
    const [dato,setDato]=useState({});

    const customFetch=(elements,timeout)=>new Promise((res)=>
          setTimeout(()=>{
               res(elements)
          },timeout)
    );

    useEffect(()=>{
        customFetch(elements[1],2000)
        .then(result=>setDato(result))
        .catch(error=>console.log(error))
        
    },[]);

    return(
     <ItemDetail item={dato}/>   
    );
}
export default ItemDetailContainer;