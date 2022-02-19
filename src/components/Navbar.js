import 'bootstrap/dist/css/bootstrap.min.css';
import logoMarca from '../image/logoinsiders.png'
import ShoppingCart from './CartWidget';
import {Link} from 'react-router-dom';

const Navbar=()=>{
    return (
      <>
<nav className="navbar navbar-expand-lg navbar-light  bg-danger">
  <Link to='/' style={{textDecoration:'none'}}><img src={logoMarca} width="150" height="40"></img></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to='/category/1'>Anime</Link>
      </li>
      <li className="nav-item">
        <Link to='/category/2' >Bandas</Link>
      </li>
      <li className="nav-item">
        <Link to='/category/3' >Peliculas</Link>
      </li>
      <li className="nav-item">
        <Link to='/category/otros' >Otros</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" id="color-item"><ShoppingCart/></a>
      </li>
    </ul>
  </div>
</nav>
</>
    )
}
export default Navbar;