import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {firestoreFechOne} from "../utils/firestoreFech";
const {elements} = require("./Productos");


const ItemDetailContainer =()=>{
//TODO:Muestro los detalles del producto en la posición 1
const [item,setItem]=useState({});
const {idItem}=useParams();
console.log(idItem);
/*
const customFetch=(elements,timeout)=>{
    return new Promise((res)=>
          setTimeout(()=>{
               res(elements)
          },timeout)
    );
}

    const customFetch=(elements,timeout)=>
    new Promise((res)=>
          setTimeout(()=>{
               res(elements)
          },timeout)
    );

    useEffect(()=>{
            customFetch(elements.find(item=>item.id===parseInt(idItem)),2000)
            .then(result=>setItem(result))
            .catch(error=>console.log(error))
    },[idItem]);
*/
useEffect(()=>{
    firestoreFechOne(idItem)
    .then(result=>setItem(result))
    .catch(error=>console.log(error))
   
},[]);
    return(
     <ItemDetail item={item}/>
    );
}
export default ItemDetailContainer;