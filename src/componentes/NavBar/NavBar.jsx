import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <header>
        <h1>The Petkery</h1>
        <nav>
            <ul>
                <li>Quienes Somos</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar