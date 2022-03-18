import ItemList from "./ItemList";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import db from '../utils/firebaseConfig';
import { collection, get,getDocs,query,orderBy,where} from "firebase/firestore";
import {firestoreFech} from "../utils/firestoreFech";
const {elements} = require("../utils/Productos");

const ItemListContainer =()=>{
//TODO:Filtro productos por categoria
    const [items,setItems]=useState([]);
    const {idCategory}=useParams();
    useEffect(()=>{
        firestoreFech(idCategory)
        .then(result=>setItems(result))
        .catch(error=>console.log(error))
    },[idCategory]);
    return(
        //TODO:Devuelvo los productos filtrados
        <>
        <div className="contenedorItems">
        <ItemList items={items}/>
        </div>
        </>
    );
}
export default ItemListContainer;