import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './itemListContainer.css';

const Item = ({ elemento, addToCart }) => {

  useEffect(() => {
    const buttons = document.querySelectorAll('.button-price');
    
    buttons.forEach(button => {
      const handleClick = (e) => {
        if (!button.classList.contains('loading')) {
          button.classList.add('loading');
          setTimeout(() => button.classList.remove('loading'), 3700);
        }
        e.preventDefault();
      };
      button.addEventListener('click', handleClick);
      
      return () => {
        button.removeEventListener('click', handleClick);
      };
    });
  }, []);

  return (
    <>  
      <div className="card mb-3">
        <img src={elemento.img} className="card-img-top" alt={elemento.nombre} />
        <div className="card-body">
          <h5 className="card-title">${elemento.precio}</h5>
          <p className="card-text">{elemento.nombre}</p>

          <div className='articleText'>
            <Link to={`/articulo/${elemento.id}`} className="text-decoration-none">
              <button className='detailButton' >
                <span>Ver detalles</span>
              </button>
            </Link>
            <div className='price'>
              <p className="card-text"><small className="text-muted">{elemento.marca}</small></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
