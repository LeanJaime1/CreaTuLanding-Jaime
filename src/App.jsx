import { useState } from 'react';
import './css/App.css';
import NavBar from './components/navBar/navBar.jsx';
import ItemListContainer from './components/itemListContainer/itemListContainer.jsx';
import Footer from './components/footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Articulo from './components/articulo/Articulo.jsx';
import CheckOut from './components/checkout/CheckOut.jsx'; 

function App() {
  const [contador, setContador] = useState(0);
  const [carrito, setCarrito] = useState([]);

  const addToCart = (producto) => {
    setContador(contador + 1);
    setCarrito([...carrito, producto]);
  };

  const emptyCart = () => {
    setContador(0);
    setCarrito([]);
    console.log('El carrito ha sido vaciado.');
  };

  const removeFromCart = (index) => {
    const newCarrito = [...carrito];
    newCarrito.splice(index, 1);
    setCarrito(newCarrito);
    setContador(contador - 1);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar contador={contador} emptyCart={emptyCart} />
        <Routes>
          <Route path="/" element={<ItemListContainer addToCart={addToCart} />} />
          <Route path="/articulo/:id" element={<Articulo addToCart={addToCart} />} />
          <Route path="/marca/:marca" element={<ItemListContainer addToCart={addToCart} />} />
          <Route path="/checkout" element={<CheckOut carrito={carrito} removeFromCart={removeFromCart} />} /> 
          <Route path="*" element={<ItemListContainer addToCart={addToCart} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
