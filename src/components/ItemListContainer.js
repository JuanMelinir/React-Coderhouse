import ItemList from "./ItemList";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
const {elements} = require("./Productos");

const ItemListContainer =()=>{
    /*const elements=[
        {
            id:1 ,
            title:"StormTroopers" ,
            pictureUrl:"https://i.postimg.cc/v1Jbns5q/14.png" ,
            description:"100% algodón, estampa hecha con transfer importado de calidad.",
            price:"2500",
            stock:"5"
        },
        {
            id:2 ,
            title:"Ataque de titanes" ,
            pictureUrl:"https://i.postimg.cc/CZBwd1nn/AT001.png" ,
            description:"100% algodón, estampa hecha con transfer importado de calidad.",
            price:"2500",
            stock:"5"
        },
        {
            id:3 ,
            title:"Caballeros del Zodiaco" ,
            pictureUrl:"https://i.postimg.cc/HrPpp5nC/CZ001.png" ,
            description:"100% algodón, estampa hecha con transfer importado de calidad.",
            price:"2500",
            stock:"5"
        },
        {
            id:4 ,
            title:"Popeye" ,
            pictureUrl:"https://i.postimg.cc/ZB6ZFMcT/POP001.png" ,
            description:"100% algodón, estampa hecha con transfer importado de calidad.",
            price:"2500",
            stock:"5"
        },
        {
            id:5 ,
            title:"Van Halen" ,
            pictureUrl:"https://i.postimg.cc/zyfzZpJj/VH001.png" ,
            description:"100% algodón, estampa hecha con transfer importado de calidad.",
            price:"2500",
            stock:"5"
        },
        {
            id:6 ,
            title:"Dragon Ball" ,
            pictureUrl:"https://i.postimg.cc/VdgfV2cv/DB001.png" ,
            description:"100% algodón, estampa hecha con transfer importado de calidad.",
            price:"2500",
            stock:"5"
        }
    ];*/
    const [items,setItems]=useState([]);
    const {idCategory}=useParams();
    const customFetch=(elements,timeout)=>{
        return new Promise((res)=>
              setTimeout(()=>{
                   res(elements)
              },timeout)
        );
 }
    
    //TODO:componentDidMount
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
            
  
    },[]);


    return(
        <>
        <div className="contenedorItems">
        <ItemList items={items}/>
        </div>
        </>
    );
}
export default ItemListContainer;