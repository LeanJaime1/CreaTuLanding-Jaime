import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../data/backend-falso.js'; 
import './articulo.css';

const Articulo = ({ addToCart }) => {
  const { id } = useParams();
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

  return (
    <div className='articleBox'>
      <img src={articulo.img} alt={articulo.nombre} />
      <div className='articleTextBox'>
        <h1>{articulo.nombre}</h1>
        <p>${articulo.precio}</p>
        <p>{articulo.descripcion}</p>
        <button className='button-price' onClick={addToCart}> 
              <span>+ Agregar al carrito</span>
              <div className="cart">
                
              </div>
            </button>
            <button>
              <span>Finalizar</span>
            </button>
      </div>
    </div>
  );
};

export default Articulo;
