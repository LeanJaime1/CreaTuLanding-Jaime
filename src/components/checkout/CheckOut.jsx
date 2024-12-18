import React from 'react';
import './checkout.css'; 
import { useNavigate } from 'react-router-dom';

const CheckOut = ({ carrito, removeFromCart, emptyCart }) => {
  const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
  const navigate = useNavigate(); 

  const finalizarCompra = () => {
    navigate('/formulario'); 
  };

  return (
    <div className="checkout-container">
      <h1>Carrito de Compras</h1>
      <div className="checkout-grid">
        {carrito.map((producto, index) => (
          <div key={index} className="checkout-item">
            <img src={producto.img} alt={producto.nombre} />
            <span>{producto.nombre}</span>
            <span>${producto.precio}</span>
            <button className='deleteButton' onClick={() => removeFromCart(index)}>Eliminar</button>
          </div>
        ))}
      </div>
      <div className="checkout-total">
        Total: ${total}
      </div>
      <button className="checkout-button" onClick={finalizarCompra}>
        Finalizar Compra
      </button>
    </div>
  );
};

export default CheckOut;
