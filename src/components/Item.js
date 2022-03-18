
import {Link} from 'react-router-dom';
//TODO:Un producto, detalles del mismo
const Item=(props)=>{
return(
<div className="contenedorItem">
    <div className="textPrecioAnterior"> <h3 className='textPrecioTachado'>-10% </h3></div>
    <div className="contenedorTitulo"><h5 className='titulo'>{props.title}</h5></div>
    <h5>{props.idCategory}</h5>
    <h5>{props.description}</h5>
    <img src={props.pictureUrl} alt={props.title}/>
   <div className="precio"><h3 className='textPrecio'>{props.price}</h3></div> 
    <button type="button" className="btn btn-outline-secondary" id="btnDetalles"><Link to={`/item/${props.id}`} id="textLink"><h6 className="text">Detalles</h6></Link></button>
    <h6>Stock disponible {props.stock}</h6>
</div>
);
}

export default Item;