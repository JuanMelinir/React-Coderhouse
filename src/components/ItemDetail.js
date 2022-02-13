import Item from "./Item";

const ItemDetail=({item})=>{
    return(
        <>
        {
        item.map(item=>
        <Item 
        key={item.id}
        title={item.title}
        pictureUrl={item.pictureUrl}
        description={item.description}
        price={item.price}
        stock={item.stock}
        /> 
        ) 
        }
        </>
        );
    }
    
    export default ItemDetail;