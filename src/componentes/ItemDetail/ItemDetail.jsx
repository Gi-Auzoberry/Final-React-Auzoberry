import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ id, nombre, img, descripcion, precio, stock }) => {

  const [agregarCant, setAgregarCant] = useState(0);

  const { addCarrito } = useContext(CarritoContext);

  const handleCant = (cantidad) => {
    setAgregarCant(cantidad);

    const item = { id, nombre, precio, img }
    addCarrito(item, cantidad);
  }

  const volver = useNavigate();

  return (
    <div className='contenedorDetalle' >
      <Link className='volver' onClick={ () => volver(-1)}><img src="../img/flecha.png" alt="volver"/></Link>
      <h3 className='colorDetalle' > {nombre} </h3>
      <img src={img} alt={nombre} />
      <p className='colorDetalle' > {descripcion} </p>
      <p className='colorDetalle' > Precio: ${precio} </p>

      {agregarCant > 0 ? (<Link className="btn-finalizar" to="/cart">Iniciar Compra</Link>) : (<ItemCount stock={stock} agregar={handleCant} />)}

      <p className='stock-disponible'>Stock Disponible: {stock} </p>
    </div>
  )
}

export default ItemDetail