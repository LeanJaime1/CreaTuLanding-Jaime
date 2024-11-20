import React from 'react';
import { useParams } from 'react-router-dom';
import baseDeDatos from './data/backend-falso.js';

const Articulo = () => {
  const { id } = useParams();
  console.log("ID del artículo:", id); // Verifica si se recibe el id

  const articulo = baseDeDatos.find(item => item.id === parseInt(id));

  if (!articulo) {
    return <div>Artículo no encontrado</div>;
  }

  return (
    <div>
      <h1>Detalles del Artículo</h1>
      <p>ID del Artículo: {id}</p>
      <p>Nombre: {articulo.nombre}</p>
      <p>Descripción: {articulo.descripcion}</p>
      <p>Precio: ${articulo.precio}</p>
      <img src={articulo.img} alt={articulo.nombre} />
    </div>
  );
};

export default Articulo;
