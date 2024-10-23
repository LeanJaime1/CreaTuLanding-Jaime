import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {


  return(
    <div className='cards'>
        {products.map((elemento) =>
            {
                return(
                  
                  <Item elemento={elemento} key={elemento.nombre} />
                  
                )
            } 
          )}
    </div>
  )
}

export default ItemList