import React, {useEffect, useState} from 'react'
import './itemListContainer.css'
import ItemList from './ItemList'
import { getProducts } from '../data/backend-falso'

const itemListContainer = ({}) => {

  const [products, setProducts]= useState([])



useEffect(() => {
  getProducts()
  .then(res => setProducts(res))
  .catch(e=>console.error(e))
  .finally()
},[])


 

  return (
    <>
    <h1>Zapatillas Hombre</h1>
    <div>
    <ItemList products={products} />
    </div>
    </>
  )
}

export default itemListContainer

