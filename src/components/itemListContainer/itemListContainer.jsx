import React, { useEffect, useState } from 'react';
import './itemListContainer.css';
import ItemList from './ItemList';
import { getProducts } from '../data/backend-falso';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ addToCart }) => {
  const { marca } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(res => {
        if (marca) {
          const filteredProducts = res.filter(product => product.marca === marca);
          setProducts(filteredProducts);
        } else {
          setProducts(res);
        }
      })
      .catch(e => console.error(e));
  }, [marca]);

  return (
    <>
      <div className='mt-3'>
        <ItemList products={products} addToCart={addToCart} />
      </div>
    </>
  );
};

export default ItemListContainer;
