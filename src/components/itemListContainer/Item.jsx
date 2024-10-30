import React, { useState } from 'react'
import './itemListContainer.css'

const Item = ({elemento, addToCart}) => {


  document.querySelectorAll('.button-price').forEach(button => button.addEventListener('click', e => {
    if(!button.classList.contains('loading')) {

        button.classList.add('loading');

        setTimeout(() => button.classList.remove('loading'), 3700);

    }
    e.preventDefault();
}));




  return (
    <>  
    <div class="card mb-3">
  <img src={elemento.img} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">${elemento.precio}</h5>
    <p class="card-text">{elemento.nombre}</p>
    <div className='price'>
    <p class="card-text"><small class="text-muted">{elemento.marca}</small></p>
    <button className='button-price' onClick={()=>addToCart()}> <span>Add to cart</span><div class="cart">
        <svg viewBox="0 0 36 26">
            <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
            <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
        </svg>
    </div> </button>
    </div>
  </div>
</div>
</> 
  )
}

export default Item

