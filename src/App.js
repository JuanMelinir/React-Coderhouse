
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';

const App=() =>{
  return (
    <CartContextProvider>
    <BrowserRouter>
    
    <Navbar/>
    <Routes>
      //TODO: Lista de todos los productos de nuestro ecommerce
      <Route path="/" element={<ItemListContainer />}/>
      //TODO: Muestra el detalle de un item
      <Route path="/item/:idItem" element={<ItemDetailContainer />}/>
      //TODO:filtra los productos por categoria 
      <Route path="/category/:idCategory" element={<ItemListContainer />}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
  
    </BrowserRouter>
    </CartContextProvider>
    
    
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
