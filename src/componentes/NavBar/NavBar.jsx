import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
      <Link className='logo' to="/">
        <img src="../img/Logo Claro.jpg" alt="Logo Claro The Petkery" />
      </Link>

        <nav>
            <ul>
                <li><NavLink className="li" to="/About">Quienes Somos</NavLink></li>
                <li><NavLink className="li" to="categoria/Tortas">Tortas</NavLink></li>
                <li><NavLink className="li" to="categoria/Cupcakes">Cupcakes</NavLink></li>
                <li><NavLink className="li" to="categoria/Treats">Treats</NavLink></li>
                <li><NavLink className="li" to="/Contacto">Contacto</NavLink></li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar 