import Item from "./Item";

const ItemList = ({items}) =>{
return(
    <>
    {
    items.map(item=>
    <Item 
    key={item.id}
    title={item.title}
    pictureUrl={item.pictureUrl}
    price={item.price}
    stock={item.stock}
    /> 
    ) 
    }
    </>
);
}
export default ItemList;