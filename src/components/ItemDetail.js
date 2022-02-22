
import ItemCount from "./ItemCount";
import {useState } from 'react'; 
import {Link} from 'react-router-dom';

const ItemDetail=({item})=>{
    const [itemCount,setItemCount]=useState(0);
    //TODO: Muestro los detalles de un producto
    const onAdd=(cantidad)=>{
        alert("Se agregaron "+cantidad+" productos al carrito.");
        setItemCount(cantidad);
    } 
    return(
        <>
        {
        <div className="contenedorItemDescripcion">
        <div className="contenedorItem">
        <h5 className="textPrecio">{item.title}</h5>
        <img src={item.pictureUrl} alt={item.title}/>
        <h5 className="textPrecio">Código artículo: {item.id}</h5>
         {
             itemCount===0
             ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/>
             : <Link to='/cart' style={{textDecoration:"none"}}><button className="btn btn-primary" type="button">Checkear compra</button></Link>
        }
    
        </div>
        <div className="contenedorItemDetalles">
        <h6 className="textDescripcion">{item.description}</h6>
        <h3 className="textPrecio">$ {item.price}</h3>
        </div>
        
        
        </div>
       
        }
        </>
        );
    }
    
    export default ItemDetail;