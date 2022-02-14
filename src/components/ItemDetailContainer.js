import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
//import productos from "./Productos";

const {elements} = require("./Productos");
//import {elements,getItem} from "./Productos";

const ItemDetailContainer =()=>{

    const elements=[
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
    ];
    const [dato,setDato]=useState({});

    const customFetch=(elements,timeout)=>new Promise((res)=>
          setTimeout(()=>{
               res(elements)
          },timeout)
    );

    useEffect(()=>{
        customFetch(elements[1],20000)
        .then(result=>setDato(result))
        .catch(error=>console.log(error))
        
    },[]);

    return(
     <ItemDetail item={dato}/>   
    );
}
export default ItemDetailContainer;