import ItemList from "./ItemList";
import { useEffect,useState } from "react";
const ItemListContainer =({greeting})=>{
    const elements=[
        {
            id:1 ,
            title:"StormTroopers" ,
            pictureUrl:"https://i.postimg.cc/v1Jbns5q/14.png" ,
            price:"2500",
            stock:"5"
        },
        {
            id:2 ,
            title:"Ataque de titanes" ,
            pictureUrl:"https://i.postimg.cc/CZBwd1nn/AT001.png" ,
            price:"2500",
            stock:"5"
        },
        {
            id:3 ,
            title:"Caballeros del Zodiaco" ,
            pictureUrl:"https://i.postimg.cc/HrPpp5nC/CZ001.png" ,
            price:"2500",
            stock:"5"
        },
        {
            id:4 ,
            title:"Popeye" ,
            pictureUrl:"https://i.postimg.cc/ZB6ZFMcT/POP001.png" ,
            price:"2500",
            stock:"5"
        },
        {
            id:5 ,
            title:"Van Halen" ,
            pictureUrl:"https://i.postimg.cc/zyfzZpJj/VH001.png" ,
            price:"2500",
            stock:"5"
        },
        {
            id:6 ,
            title:"Dragon Ball" ,
            pictureUrl:"https://i.postimg.cc/VdgfV2cv/DB001.png" ,
            price:"2500",
            stock:"5"
        }
    ];
    const customFetch=(elements,timeout)=>{
        return new Promise((res)=>
              setTimeout(()=>{
                   res(elements)
              },timeout)
        );
 }
    customFetch(elements,3000)
       .then(res=>setItems(res))
       .then(res=>console.log(res))
       .catch(error=>console.log("Hubo un problema con la petición customFetch..."));
    
    const [items,setItems]=useState([]);
    //TODO:componentDidMount
    //useEffect(()=>{
       // setTimeout(()=>{
         //   getItems();
        //},3000);
    //},[]);

    let is_ok=true;



   

    return(
        <>
        <h5>{greeting}</h5>
        <div className="contenedorItems">
        <ItemList items={items}/>
        </div>
        </>
        

    );
}
export default ItemListContainer;