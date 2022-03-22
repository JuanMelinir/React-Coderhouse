
import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import CartContextProvider from './CartContext';
import { doc, setDoc, collection, serverTimestamp, updateDoc, increment } from 'firebase/firestore';
import db from '../utils/firebaseConfig';

const Cart = () => {
    const { removeItem, totalCost } = useContext(CartContext);
    const cart = useContext(CartContext);
    const createOrder = () => {
        let order = {
            buyer: {
                email: "leo_messi@gmail.com",
                name: "Leo Messi",
                phone: "123456"
            },
            date: serverTimestamp(),
            items: cart.cartList.map((item) => {
                return { id: item.id, price: item.price, title: item.title, quantity: item.quantityItems }
            }),
            total: cart.totalCost
        }
        const crearOrdenEnFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"))
            await setDoc(newOrderRef, order)
            return newOrderRef;
        }
        crearOrdenEnFirestore()
            .then(result => {
                alert("tu orden ha sido creada: " + result.id); cart.clear();
                cart.cartList.map(async (item) => {
                    const itemRef = doc(db, "remeras", item.id);
                    await updateDoc(itemRef, { stock: increment(-item.quantityItems) })
                })
            })
            .catch(error => console.log(error));
    }
    return (
        <div className="detailsContainer">
            <div className="titleDetailsContainer"><h3>Carrito</h3>
            
            {cart.cartList.length > 0
                    ? <button className="btn btn-dark" type="button" id="btnEmpty" onClick={cart.clear}>Vaciar</button>
                    :<div className="itemDescriptionContainer"><h5>Su carro está vacio</h5></div>}
                    </div>
                <div className="itemDetailContainerCart">
                {cart.cartList.length > 0 && cart.cartList.map(item => (

                    <div className="containerDetailsForItemCart">
                        <div className="imageContainer">
                            <img src={item.pictureUrl}></img>
                        </div>

                        <div className="cartItemTitleContainer">
                            <h5>{item.title}</h5>
                            <button className="btn btn-dark " type="button" id="btnRemove" onClick={() => removeItem(item.id)}>Eliminar</button>
                        </div>
                        <div className="containerQuantityItem">
                            <h6 > cantidad: {item.quantityItems} items</h6>
                            <h6 >precio por unidad: $ {item.price}</h6>
                            <h6 >precio total: $ {item.price * item.quantityItems}</h6>
                        </div>
                    </div>
            )
            )}</div>
            {
            cart.cartList.length > 0
            ? <div className="tableDetailsContainer">
                <div className="tableContainer">
                    
                    <table class="table">

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
                    <button className="btn btn-dark " type="button" id="btnRemove" onClick={createOrder}>Confirmar pedido</button>
                </div>
                </div>
               :<div className="tableContainer"></div>
            }
            
        </div>
    );
}

export default Cart;