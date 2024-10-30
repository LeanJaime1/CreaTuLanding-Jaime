import React from 'react'
import './cartWidget.css'

const cartWidget = ({contador}) => {


  
  return (

    
    
    <div>

      <span>{contador}</span>
      <i class="fa-solid fa-cart-shopping"></i> 
    </div>
    
  )
}

export default cartWidget