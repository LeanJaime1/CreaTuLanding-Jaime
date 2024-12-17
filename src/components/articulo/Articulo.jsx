import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProducts } from '../data/backend-falso.js'; 
import './articulo.css';

const Articulo = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [articulo, setArticulo] = useState(null);
  const [talle, setTalle] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts();
      const foundArticulo = products.find(item => item.id === id); 
      setArticulo(foundArticulo);
    };

    fetchData();
  }, [id]);

  const handleTalleClick = (talle) => {
    setTalle(talle);
  };

  const handleColorClick = (color) => {
    setColor(color);
  };

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
        <p className='price'>${articulo.precio}</p>
        <p>{articulo.descripcion}</p>
        <div className='selectOptions'>
          <label>Talle:</label>
          <div className='optionsContainer'>
            {['38', '39', '40', '41', '42'].map(talleOption => (
              <div 
                key={talleOption} 
                className={`optionSquare ${talle === talleOption ? 'selected' : ''}`} 
                onClick={() => handleTalleClick(talleOption)}
              >
                {talleOption}
              </div>
            ))}
          </div>
        </div>
        <div className='selectOptions'>
          <label>Color:</label>
          <div className='optionsContainer'>
            {['rojo', 'azul', 'verde', 'negro', 'blanco'].map(colorOption => (
              <div 
                key={colorOption} 
                className={`optionSquare ${color === colorOption ? 'selected' : ''}`} 
                onClick={() => handleColorClick(colorOption)}
                style={{ backgroundColor: color === colorOption ? '#343a40' : '#f5f5f7', color: color === colorOption ? '#fff' : '#333' }}
              >
                {colorOption}
              </div>
            ))}
          </div>
        </div>
        <div className='articleButtons'>
          <button className='button-price' onClick={() => addToCart({...articulo, talle, color})}> 
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
