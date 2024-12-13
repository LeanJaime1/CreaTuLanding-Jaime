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
      </div>
    </div>
  );
};

export default Articulo;
