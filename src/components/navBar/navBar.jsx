import { Link } from 'react-router-dom';
import CartWidget from '../cartWidget/cartWidget';
import './navBar.css';

function NavBar({ contador, emptyCart }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <Link className="navbar-brand text-light" to="/">SNEAKERS</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active text-light" to="/marca/Adidas">Adidas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-light" to="/marca/Nike">Nike</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-light" to="#"><CartWidget contador={contador} /></Link>
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
