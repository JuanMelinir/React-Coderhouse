import Item from "./Item";
//TODO:mapeo de los productos si la cantidad de items  es >0 sino muestro un spinner de espera
const ItemList = ({items}) =>{
return(
    <>
    {
    items.length > 0
    ? items.map(item=><Item key={item.id} id={item.id} title={item.title} pictureUrl={item.pictureUrl} price={item.price} stock={item.stock}/>)
    :<div className="spinnerContainer"><p><span class="spinner-grow text-danger"></span></p></div>
    }
    </>
);
}
export default ItemList;