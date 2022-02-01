import 'bootstrap/dist/css/bootstrap.min.css';
import logoMarca from '../image/logoinsiders.png'
import ShoppingCart from './CartWidget';

const Navbar=()=>{
    return (
      <>
<nav className="navbar navbar-expand-lg navbar-light  bg-danger">
  <a className="navbar-brand" href="#"><img src={logoMarca} width="150" height="40"></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#" id="color-item">Categoría 1</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" id="color-item">Categoría 2</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" id="color-item">Categoría 3</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" id="color-item">Categoría 4</a>
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