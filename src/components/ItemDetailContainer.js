import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {firestoreFechOne} from "../utils/firestoreFech";
const {elements} = require("../utils/Productos");


const ItemDetailContainer =()=>{
const [item,setItem]=useState({});
const {idItem}=useParams();
console.log(idItem);

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