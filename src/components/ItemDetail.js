

import ItemCount from "./ItemCount";
import {useState,useContext} from 'react'; 
import {Link} from 'react-router-dom';
import {CartContext} from "./CartContext";

const ItemDetail=({item})=>{
    
    const [itemCount,setItemCount]=useState(0);
    const cart=useContext(CartContext);

    //TODO: Muestro los detalles de un producto
    const onAdd=(quantity)=>{
        alert("Se agregaron "+quantity+" productos al carrito.");
        setItemCount(quantity);
        cart.addToCart(item,quantity);
        cart.calculateAmountItems(quantity)
    } 
    return(
        
        
        <div className="container-fluid">
        {
        <div className="detailsContainer">
        <div className="itemContainer">
        <h5 className="textPrice">{item.title}</h5>
        <img src={item.pictureUrl} alt={item.title}/>
        <h5 className="textPrice">Código artículo: {item.id}</h5>
         {
             itemCount===0
             ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/>
             : <Link to='/cart' style={{textDecoration:"none"}}><button className="btn btn-dark" type="button">Checkear compra</button></Link>
        }
        </div>
        <div className="itemDetailContainer">
        <h6 className="textDescription">{item.description}</h6>
        <h3 className="textPrice">$ {item.price}</h3>
        </div>
      </div>    
         }
      </div>

        );
    }
    
    export default ItemDetail;