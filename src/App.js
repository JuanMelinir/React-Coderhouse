//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'

const App=() =>{
  return (
    <BrowserRouter>
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<ItemListContainer />}></Route>
      <Route path="/item" element={<ItemDetailContainer />}></Route>
      <Route path="/category/:idCategory" element={<ItemListContainer />}></Route>
    </Routes>
    <ItemCount stock="5" initial="1"/>
    </div>
    </BrowserRouter>
    
    
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
