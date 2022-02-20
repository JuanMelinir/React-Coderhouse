import {Badge} from '@material-ui/core';
import {ShoppingCartOutlined} from '@material-ui/icons';

const CartWidget=()=>{
    return(
<Badge badgeContent={1} color='secondary'>
    <ShoppingCartOutlined style={{ fill: '#000000' }}/>
</Badge>
    );
}
export default CartWidget;