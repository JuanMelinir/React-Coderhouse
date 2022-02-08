import ItemList from "./ItemList";

const ItemListContainer =({greeting})=>{
    const items=[
        {
            id:1 ,
            title:"StormTroopers" ,
            pictureUrl:"https://drive.google.com/file/d/1PtH9llhZum9dHJD7e3iR6pmNKggFj8FQ/view?usp=sharing" ,
            price:"2500"
        },
        {
            id:2 ,
            title:"Ataque de titanes" ,
            pictureUrl:"https://drive.google.com/file/d/151edGwPccCD_e_Q8JEq5TMCasuh-M3dt/view?usp=sharing" ,
            price:"2500"
        },
        {
            id:3 ,
            title:"Caballeros del Zodiaco" ,
            pictureUrl:"https://drive.google.com/file/d/1sHt514jJHYuyguR_F1DTCSPVreX8NqHL/view?usp=sharing" ,
            price:"2500"
        },
        {
            id:4 ,
            title:"Popeye" ,
            pictureUrl:"https://drive.google.com/file/d/1yAeTDU3CdK-wPNAuiTnfgXsjnXozLnse/view?usp=sharing" ,
            price:"2500"
        },
        {
            id:5 ,
            title:"Van Halen" ,
            pictureUrl:"https://drive.google.com/file/d/1OJIrcfwu-CbPH4Dq3lxUYFqZzszfEd2b/view?usp=sharing" ,
            price:"2500"
        },
        {
            id:6 ,
            title:"Dragon Ball" ,
            pictureUrl:"https://drive.google.com/file/d/1eAjNMuH5c8IXr8QnEzxofQe9OHwKEsxX/view?usp=sharing" ,
            price:"2500"
        }
    ];
   
    return(
        <>
<h5>{greeting}</h5>
<ItemList items={items}/>
        </>

    );
}
export default ItemListContainer;