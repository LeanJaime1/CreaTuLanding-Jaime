import React from 'react';
import './checkout.css'; 

const CheckOut = ({ carrito, removeFromCart }) => {
  const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);

  const finalizarCompra = () => {
    alert('Compra finalizada con éxito');
    
  };

  return (
    <div className="checkout-container">
      <h1>Carrito de Compras</h1>
      <div className="checkout-grid">
        {carrito.map((producto, index) => (
          <div key={index} className="checkout-item">
            <img src={producto.img} alt={producto.nombre} />
            <div>
              <span>{producto.nombre}</span>
              <span>${producto.precio}</span>
              <button onClick={() => removeFromCart(index)}>Eliminar</button> 
            </div>
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
