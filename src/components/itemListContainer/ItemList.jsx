import React from 'react';
import Item from './Item';

const ItemList = ({ products, addToCart }) => {
  return (
    <div className='cards'>
      {products.map((elemento) => (
        <Item elemento={elemento} key={elemento.id} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ItemList;
