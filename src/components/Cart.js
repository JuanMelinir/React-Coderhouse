
import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import CartContextProvider from './CartContext';
import { doc, setDoc, collection, serverTimestamp, updateDoc, increment } from 'firebase/firestore';
import db from '../utils/firebaseConfig';

const Cart = () => {
    const { removeItem, totalCost } = useContext(CartContext);
    const carrito = useContext(CartContext);
    const crearOrden = () => {
        let orden = {
            buyer: {
                email: "leo_messi@gmail.com",
                name: "Leo Messi",
                phone: "123456"
            },
            date: serverTimestamp(),
            items: carrito.cartList.map((item) => {
                return { id: item.id, price: item.price, title: item.title, cantidad: item.cantidadItems }
            }),
            total: carrito.totalCost
        }
        const crearOrdenEnFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"))
            await setDoc(newOrderRef, orden)
            return newOrderRef;
        }
        crearOrdenEnFirestore()
            .then(result => {
                alert("tu orden ha sido creada: " + result.id); carrito.clear();
                carrito.cartList.map(async (item) => {
                    const itemRef = doc(db, "remeras", item.id);
                    await updateDoc(itemRef, { stock: increment(-item.cantidadItems) })
                })
            })
            .catch(error => console.log(error));
    }
    return (
        <div className="contenedorItemsCarrito">
            <h3>Carrito</h3>
            {
                carrito.cartList.length > 0
                    ? <button className="btn btn-dark" type="button" id="btnVaciar" onClick={
                        carrito.clear}>Vaciar</button>
                    :<div className="contenedorItemDescripcion"><h5>Su carro está vacio</h5></div>}

                    <div class="row">
                   <div class="col-8">{carrito.cartList.length > 0 && carrito.cartList.map(item => (
                
                <div className="contenedorItemDescripcion">

                    <div className="contenedorItemDetallesCarrito">
                        <div className="contenedorImagen">
                            <img src={item.pictureUrl}></img>
                        </div>

                        <div className="contenedorTituloItemCarrito">
                            <h5>{item.title}</h5>
                            <button className="btn btn-dark " type="button" id="btnELiminar" onClick={() => removeItem(item.id)}>Eliminar</button>
                        </div>
                        <div className="contenedorItem">
                            <h6 > cantidad: {item.cantidadItems} items</h6>
                            <h6 >precio por unidad: $ {item.price}</h6>
                            <h6 >precio total: $ {item.price * item.cantidadItems}</h6>
                        </div>
                    </div>
                </div>

            )
            )
            }</div>
                   <div className="col-4"><div className="contenedorTabla">
                    
                    <table className="table">

                        <thead>
                        <h6>Pedido N° xxxxxxx</h6>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Subtotal</th>
                                <td>{totalCost.reduce((a, b) => a + b, 0)}</td>
                            </tr>
                            <tr>
                                <th scope="row">Descuento</th>
                                <td>-xxxxx</td>
                            </tr>
                            <tr>
                                <th scope="row">Total</th>
                                <td>{totalCost.reduce((a, b) => a + b, 0)}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="btn btn-dark " type="button" id="btnELiminar" onClick={crearOrden}>Confirmar pedido</button>
                </div></div>
                   </div>
            
        </div>
    );
}

export default Cart;
