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
          <Link to={`/articulo/${elemento.id}`} className="text-decoration-none">
            <p className="card-text">{elemento.nombre}</p>
          </Link>
          <div className='price'>
            <p className="card-text"><small className="text-muted">{elemento.marca}</small></p>
            <button className='button-price' onClick={() => addToCart(elemento)}> 
              <span>Add to cart</span>
              <div className="cart">
                <svg viewBox="0 0 36 26">
                  <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
                  <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
