import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProducts } from '../data/backend-falso.js'; 
import './articulo.css';

const Articulo = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [articulo, setArticulo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts();
      const foundArticulo = products.find(item => item.id === id); 
      setArticulo(foundArticulo);
    };

    fetchData();
  }, [id]);

  if (!articulo) {
    return <div>Artículo no encontrado</div>;
  }

  const handleFinalizar = () => {
    navigate('/checkout');
  };

  return (
    <div className='articleBox'>
      <img src={articulo.img} alt={articulo.nombre} />
      <div className='articleTextBox'>
        <h1>{articulo.nombre}</h1>
        <p>${articulo.precio}</p>
        <p>{articulo.descripcion}</p>
        <div className='articleButtons'>
          <button className='button-price' onClick={() => addToCart(articulo)}> 
            <span>+ Agregar al carrito</span>
          </button>
          <button className='button-price' onClick={handleFinalizar}>
            <span>Finalizar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Articulo;
