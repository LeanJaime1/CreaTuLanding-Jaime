import { useState } from 'react'
import './css/App.css'
import NavBar from './components/navBar/navBar.jsx'
import ItemListContainer from './components/itemListContainer/itemListContainer.jsx'


function App() {

  return (
    <>
   
      <NavBar />
      
      <ItemListContainer message="página en construcción, proximamente tendrán novedades" />

    </>
  )
}

export default App


