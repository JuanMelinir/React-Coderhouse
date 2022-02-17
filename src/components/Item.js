//TODO:Un producto, detalles del mismo
const Item=(props)=>{
return(
<div className="contenedorItem">
    <h6>{props.id}</h6>
    <h5>{props.title}</h5>
    <h5>{props.idCategory}</h5>
    <h5>{props.description}</h5>
    <img src={props.pictureUrl} alt={props.title}/>
    <h3>{props.price}</h3>
    <h6>Stock disponible {props.stock}</h6>
</div>
);
}

export default Item;