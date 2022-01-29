import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar=()=>{
    return (
<nav class="navbar navbar-expand-lg navbar-light  bg-danger">
  <a class="navbar-brand" href="#">Ecommerce</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#" id="color-item">Categoría 1</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id="color-item">Categoría 2</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id="color-item">Categoría 3</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id="color-item">Categoría 4</a>
      </li>
    </ul>
  </div>
</nav>
    )
}
export default Navbar;