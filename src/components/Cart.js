
import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import CartContextProvider from './CartContext';

const Cart = () => {
    const {removeItem,totalCost}=useContext(CartContext);
    const carrito = useContext(CartContext);
 console.log(carrito.cartList);
    return (
        <div className="contenedorItems">
       <h3>Carrito</h3>
       {
        carrito.cartList.length > 0
       ?<button className="btn btn-dark" type="button" id="btnVaciar" onClick={
           carrito.clear}>Vaciar</button>
       :<h5>Su carro está vacio</h5>  }
            
                
                {carrito.cartList.length>0 && carrito.cartList.map(item=>(
                <div className="contenedorItemDescripcion">
                
                <div className="contenedorItemDetallesCarrito">
                <img src={item.pictureUrl}></img>
                <div className="contenedorItem">
                <h5>{item.title}</h5>    
                <button className="btn btn-dark" type="button" onClick={()=>removeItem(item.id)}>Eliminar</button>
                </div>
                </div>
                <div className="contenedorItem">
                <h6 className="textDescripcion">{item.cantidadItems} items</h6>
                <h6 className="textPrecio">precio por unidad: $ {item.price}</h6>
                <h6 className="textPrecio">precio total: $ {item.price*item.cantidadItems}</h6>
                </div>
                </div>    
                
            
            )
            )
            
            }   
            <div> 
                <h6>Total: {totalCost.reduce((a,b)=>a+b,0)}</h6>
                </div>
            </div>
    );
}

export default Cart;
