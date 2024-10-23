import React, {useEffect, useState} from 'react'
import './itemListContainer.css'
import ItemList from './ItemList'
import { getProducts } from '../data/backend-falso'

const itemListContainer = ({message}) => {

  const [products, setProducts]= useState([])



useEffect(() => {
  getProducts()
  .then(res => setProducts(res))
  .catch(e=>console.error(e))
  .finally()
},[])


 

  return (
    <>
    <div className='message'>{message}</div>

    <div>
    <ItemList products={products} />
    </div>
    </>
  )
}

export default itemListContainer

