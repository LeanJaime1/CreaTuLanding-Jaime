import React from 'react';
import { useParams } from 'react-router-dom';
import baseDeDatos from '../data/backend-falso.js'; 
import './articulo.css';

const Articulo = () => {
  const { id } = useParams();

  const articulo = baseDeDatos.find(item => item.id === parseInt(id));
  
  if (!articulo) {
    return <div>Artículo no encontrado</div>;
  }



  
  return (
    <div className='articleBox'>
      <img src={articulo.img} alt={articulo.nombre} />
      <div className='articleTextBox'>
        <h1>{articulo.nombre}</h1>
        <p>${articulo.precio}</p>
        <p>{articulo.descripcion}</p>
        <button className='button-price'> 
              <span>Agregar al carrito</span>
              <div className="cart">
                <svg viewBox="0 0 36 26">
                  <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
                  <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
                </svg>
              </div>
            </button>
      </div>
    </div>
  );
};

export default Articulo;
