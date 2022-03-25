import 'bootstrap/dist/css/bootstrap.min.css';
import logoMarca from '../assets/logoinsiders.png'
import ShoppingCart from './CartWidget';
import {Link} from 'react-router-dom';
 //TODO: Contiene el logo de la empresa, las categorías y el ícono carrito de compras
const Navbar=()=>{
    return (
      <>
<nav className="navbar navbar-expand-lg navbar-light " >
  <Link to='/' style={{textDecoration:'none'}}><img src={logoMarca} width="150" height="40" className='imagenLogo'></img></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to='/category/1' id="textLink"><h6 className='text'>Anime</h6></Link>
      </li>
      <li className="nav-item">
        <Link to='/category/2' id="textLink"><h6 className='text'>Bandas</h6></Link>
      </li>
      <li className="nav-item">
        <Link to='/category/3' id="textLink"><h6 className='text'>Peliculas</h6></Link>
      </li>
      <li className="nav-item">
        <Link to='/category/4' id="textLink"><h6 className='text'>Clasicos</h6></Link>
      </li>
      <li className="nav-item">
        <Link to='/category/5' id="textLink"><h6 className='text'>Otros</h6></Link>
      </li>
    </ul>
    <div className='contenedorCarrito'><Link to='/cart'><ShoppingCart/></Link></div>
  </div>
</nav>
<div className="line"></div>
</>
    )
}
export default Navbar;