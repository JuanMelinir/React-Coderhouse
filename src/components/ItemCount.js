import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

const ItemCount=({stock,initial})=>{

    const [contador,setContador]=useState(0);
    const increment=()=>{
        if(contador<stock){
            setContador(contador+1);
        }
    }    
    const decrement=()=>{
        if(contador>initial){
            setContador(contador-1);
        }
    } 
    const addToCart=()=>{
        alert("Producto agregado!!");
    } 
    useEffect(()=>{
    console.log();
    },[contador]);
    
    return(
<div className="form">
<h6>Producto1</h6>
  <div className="input-group-prepend contador">
    <button className="btn btn-outline-primary" type="button" onClick={decrement}>-</button>
    <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" value={contador}></input>
    <button className="btn btn-outline-primary" type="button" onClick={increment}>+</button>
  </div>
  <button className="btn btn-primary" type="button" onClick={addToCart}>ADD TO CART</button>
</div>
    );
}
export default ItemCount;