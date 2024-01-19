import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {

  const { totalProductos } = useContext(CarritoContext);

  return (
    <div>
      <Link to="/cart">
        <img src="../img/shopping-cart.png" alt="Carrito de Compras" className='carrito' />
        {totalProductos > 0 && <p id="total-prod"> {totalProductos} </p>}
      </Link>
    </div>
  )
}

export default CartWidget