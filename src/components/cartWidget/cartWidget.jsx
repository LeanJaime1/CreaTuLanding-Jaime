import React from 'react';
import { Link } from 'react-router-dom'; 
import CheckOut from '../checkout/CheckOut';

const CartWidget = ({contador}) => {
  return (
    <div>
      <span>{contador}</span>
      <Link to="/checkout"> 
        <i className="fa-solid fa-cart-shopping"></i>
      </Link>
    </div>
  )
}

export default CartWidget;
