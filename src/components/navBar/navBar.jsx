import CartWidget from '../cartWidget/cartWidget';
import './navBar.css';
import baseDeDatos from '../data/backend-falso';

const filtrarPorMarca = (products, marca) => {
  return products.filter(product => product.marca === marca);
};

function NavBar({ contador, emptyCart, setFilteredProducts, resetFilters }) {
  const handleFilterChange = (brand) => {
    const filteredProducts = filtrarPorMarca(baseDeDatos, brand);
    setFilteredProducts(filteredProducts);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="index.html">SNEAKERS</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Productos</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Filtrar
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#" onClick={() => handleFilterChange('Adidas')}>Adidas</a></li>
                  <li><a className="dropdown-item" href="#" onClick={() => handleFilterChange('Nike')}>Nike</a></li>
                  <li><a className="dropdown-item" href="#" onClick={() => handleFilterChange('Jordan')}>Jordan</a></li>
                  <li><a className="dropdown-item" href="#" onClick={() => handleFilterChange('Puma')}>Puma</a></li>
                  <li><a className="dropdown-item" href="#" onClick={() => handleFilterChange('Fila')}>Fila</a></li>
                  <li><a className="dropdown-item" href="#" onClick={resetFilters}> - Quitar filtros</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><CartWidget contador={contador} /></a>
              </li>
              <li className="nav-item">
                <button className="empty-button" onClick={emptyCart}>x</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
