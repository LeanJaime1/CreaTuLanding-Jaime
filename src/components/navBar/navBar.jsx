import { useState } from 'react'
import CartWidget from '../cartWidget/cartWidget'
import './navBar.css'



function NavBar ({contador, emptyCart}){
    return(
      <>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
              <a class="navbar-brand" href="#">SNEAKERS</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Productos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><CartWidget contador={contador}/></a>
              </li>
              <li class="nav-item">
                <button className='empty-button' onClick={emptyCart}>x</button>
              </li>
            </ul>
          </div>
          </div>
        </nav>
        
      </>
        
    )
}


export default NavBar