import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

const ItemCount=({stock,initial,onAdd})=>{

    const [counter,setCounter]=useState(0);
    const increment=()=>{
        if(counter<stock){
            setCounter(counter+1);
        }
    }    
    const decrement=()=>{
        if(counter>initial){
            setCounter(counter-1);
        }
    } 
    useEffect(()=>{
    console.log();
    },[counter]);
    
    return(
<div className="form">
  <div className="input-group-prepend contador">
    <button className="btn btn-outline-primary" type="button" onClick={decrement}>-</button>
    <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" value={counter}></input>
    <button className="btn btn-outline-primary" type="button" onClick={increment}>+</button>
  </div>
  {
      stock && counter
      ? <button className="btn btn-danger" type="button" onClick={()=>onAdd(counter)}>ADD TO CART</button>
      : <button className="btn btn-danger" type="button" disabled>ADD TO CART</button>
  }
  
</div>
    );
}
export default ItemCount;