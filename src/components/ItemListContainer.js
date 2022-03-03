import ItemList from "./ItemList";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import db from '../utils/firebaseConfig';
import { collection, get,getDocs,query,orderBy,where} from "firebase/firestore";
import {firestoreFech} from "../utils/firestoreFech";
const {elements} = require("./Productos");

const ItemListContainer =()=>{
//TODO:Filtro productos por categoria
    const [items,setItems]=useState([]);
    const {idCategory}=useParams();
    /*
    const customFetch=(elements,timeout)=>{
        return new Promise((res)=>
              setTimeout(()=>{
                   res(elements)
              },timeout)
        );
 }

    useEffect(()=>{
        if(idCategory===undefined){
            customFetch(elements,2000)
            .then(result=>setItems(result))
            .catch(error=>console.log(error))
        }else{
            customFetch(elements.filter(item=>item.idCategory===parseInt(idCategory)),2000)
            .then(result=>setItems(result))
            .catch(error=>console.log(error))
        }
    },[idCategory]);
*/
    useEffect(()=>{
        const firestoreFech=async()=>{
            const querySnapshot = await getDocs(collection(db, "remeras"));
            console.log('querySnapshot ',querySnapshot );
            return querySnapshot.docs.map(document=>({
                id:document.id,
                ...document.data()
            }))
        }
        firestoreFech()
        .then(result=>setItems(result))
        .catch(error=>console.log(error))
    },[idCategory]);
    /*
    useEffect(()=>{
        firestoreFech(categoryId)
        .then(result=>setItems(result))
        .catch(error=>console.log(error))
       
    },[]);
*/
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