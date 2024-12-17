import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='bg-dark'>
      <footer className='footer py-3 my-4'>
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Productos</a></li>
        </ul>
        <p className="text-center text-light">© 2024 Sneakers</p>
      </footer>
    </div>
  );
};

export default Footer;
