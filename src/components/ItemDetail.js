import Item from "./Item";
import ItemCount from "./ItemCount";
const ItemDetail=({item})=>{
    //TODO: Muestro los detalles de un producto
    return(
        <>
        {
        <div className="contenedorItemDescripcion">
        <div className="contenedorItem">
        <h5 className="textPrecio">{item.title}</h5>
        <img src={item.pictureUrl} alt={item.title}/>
        <h5 className="textPrecio">Código artículo: {item.id}</h5>
        <ItemCount stock="5" initial="1" />
        </div>
        <div className="contenedorItemDetalles">
        <h6 className="textDescripcion">{item.description}</h6>
        <h3 className="textPrecio">{item.price}</h3>
        </div>
        
        
        </div>
       
        }
        </>
        );
    }
    
    export default ItemDetail;