import React from 'react'
import './itemListContainer.css'

const Item = ({elemento}) => {
  return (
    <>
<div class="card mb-3">
  <img src={elemento.img} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">${elemento.precio}</h5>
    <p class="card-text">{elemento.nombre}</p>
    <p class="card-text"><small class="text-muted">{elemento.marca}</small></p>
  </div>
</div>
</>
  )
}

export default Item