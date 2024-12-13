import React, { useEffect, useState } from 'react';
import './itemListContainer.css';
import ItemList from './ItemList';
import { getProducts } from '../data/backend-falso';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ products, addToCart }) => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(res => setAllProducts(res))
      .catch(e => console.error(e));
  }, []);

  return (
    <>
      <div className='mt-3'>
        <ItemList products={products} addToCart={addToCart} />
      </div>
    </>
  );
};

export default ItemListContainer;
