import { useState } from 'react';
import './css/App.css';
import NavBar from './components/navBar/navBar.jsx';
import ItemListContainer from './components/itemListContainer/itemListContainer.jsx';
import baseDeDatos from './components/data/backend-falso.js';
import Footer from './components/footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [contador, setContador] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState(baseDeDatos);

  const addToCart = () => {
    setContador(contador + 1);
  };

  const emptyCart = () => {
    setContador(0);
    console.log('El carrito ha sido vaciado.');
  };

  const resetFilters = () => { 
    setFilteredProducts(baseDeDatos); 
  };

  return (
    <>
      <BrowserRouter>
        <NavBar contador={contador} emptyCart={emptyCart} setFilteredProducts={setFilteredProducts} resetFilters={resetFilters}/>
        
        <Routes>
          <Route exact path='/' element={<ItemListContainer products={filteredProducts} addToCart={addToCart} />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
