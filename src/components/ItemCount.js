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
        console.log("Producto agregado!!");
    } 
    useEffect(()=>{
    console.log();
    },[contador]);
    
    return(
<div class="form">
<h6>Producto1</h6>
  <div class="input-group-prepend contador">
    <button class="btn btn-outline-primary" type="button" onClick={decrement}>-</button>
    <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"><p>{contador}</p></input>
    <button class="btn btn-outline-primary" type="button" onClick={increment}>+</button>
  </div>
  <button class="btn btn-primary" type="button" onClick={addToCart}>ADD TO CART</button>
</div>
    );
}
export default ItemCount;