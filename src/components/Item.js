
import {Link} from 'react-router-dom';
//TODO:Un producto, detalles del mismo
const Item=(props)=>{
return(
<div className="itemContainer">
    <div className="percentageContainer"> <h3 className='textPercentage'>-10% </h3></div>
    <div className="titleContainer"><h5 className='title'>{props.title}</h5></div>
    <h5>{props.idCategory}</h5>
    <h5>{props.description}</h5>
    <img src={props.pictureUrl} alt={props.title}/>
   <div className="priceContainer"><h3 className='textPrice'>{props.price}</h3></div> 
    <button type="button" className="btn btn-outline-secondary" id="btnDetails"><Link to={`/item/${props.id}`} id="textLink"><h6 className="text">Detalles</h6></Link></button>
    <h6>Stock disponible {props.stock}</h6>
</div>
);
}

export default Item;