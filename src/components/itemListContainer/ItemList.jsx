import React from 'react'
import Item from './Item'

const ItemList = ({products, addToCart}) => {


  return(
    <div className='cards'>
        {products.map((elemento) =>
            {
                return(

                  <Item elemento={elemento} key={elemento.nombre} addToCart={addToCart}/>
                  
                )
            } 
          )}
    </div>
  )
}

export default ItemList