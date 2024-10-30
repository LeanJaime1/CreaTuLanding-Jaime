// App.js
import { useState } from 'react';
import './css/App.css';
import NavBar from './components/navBar/navBar.jsx';
import ItemListContainer from './components/itemListContainer/itemListContainer.jsx';


function App() {
  const [contador, setContador] = useState(0);

  const addToCart = () => {
    setContador(contador + 1);
  };

  return (
    <>
      <NavBar contador={contador}/>
      <ItemListContainer addToCart={addToCart} />
    </>
  );
}

export default App;
