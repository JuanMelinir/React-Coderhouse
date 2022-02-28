import {Badge} from '@material-ui/core';
import {ShoppingCartOutlined} from '@material-ui/icons';
import { useContext } from 'react';
import {CartContext} from './CartContext';

const CartWidget=()=>{
    const test=useContext(CartContext);
    return(
<Badge badgeContent={test.calcularCantidadItems()} color='secondary'>
    <ShoppingCartOutlined style={{ fill: '#000000' }}/>
</Badge>
    );
}
export default CartWidget;