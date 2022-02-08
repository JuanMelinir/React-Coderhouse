const Item=(props)=>{
return(
<div className="contenedorItem">
    <h6>{props.id}</h6>
    <h3>{props.title}</h3>
    <img src={props.pictureUrl} />
    <h3>{props.price}</h3>
</div>
);
}

export default Item;