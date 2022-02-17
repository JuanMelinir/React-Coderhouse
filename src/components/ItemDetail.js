import Item from "./Item";

const ItemDetail=({item})=>{
    //TODO: Muestro los detalles de un producto
    return(
        <>
        {
        <div className="contenedorItemDescripcion">
        <div className="contenedorItem">
        <h5 className="textPrecio">{item.title}</h5>
        <img src={item.pictureUrl} alt={item.title}/>
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