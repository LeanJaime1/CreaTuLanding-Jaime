import React, { useEffect, useState } from 'react';
import './itemListContainer.css';
import ItemList from './ItemList';
import { getProducts } from '../data/backend-falso';

const ItemListContainer = ({ products, addToCart }) => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(res => setAllProducts(res))
      .catch(e => console.error(e));
  }, []);

  return (
    <>
      <h1>Zapatillas Hombre</h1>
      <div>
        <ItemList products={products} addToCart={addToCart} />
      </div>
    </>
  );
};

export default ItemListContainer;
