import React from 'react'
import { getProducts } from '../data/backend-falso'

const ItemList = ({products}) => {


  return(
    <div>
        {products.map((e) =>
            {
                return(
                    <div>{e.nombre}</div>
                    
                )
            } )}
    </div>
  )
}

export default ItemList