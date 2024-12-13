import { useState } from 'react';
import './css/App.css';
import NavBar from './components/navBar/navBar.jsx';
import ItemListContainer from './components/itemListContainer/itemListContainer.jsx';
import baseDeDatos from './components/data/backend-falso.js';
import Footer from './components/footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Articulo from './components/articulo/Articulo.jsx';

function App() {
  const [contador, setContador] = useState(0);

  const addToCart = () => {
    setContador(contador + 1);
  };

  const emptyCart = () => {
    setContador(0);
    console.log('El carrito ha sido vaciado.');
  };

  return (
    <>
      <BrowserRouter>
        <NavBar contador={contador} emptyCart={emptyCart} />
        <Routes>
          <Route path="/" element={<ItemListContainer products={baseDeDatos} addToCart={addToCart} />} />
          <Route path="/articulo/:id" element={<Articulo />} />
          <Route path="*" element={<ItemListContainer products={baseDeDatos} addToCart={addToCart} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
