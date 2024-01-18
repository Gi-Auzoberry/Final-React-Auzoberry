import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ id, nombre, img, descripcion, precio, stock }) => {

  const [agregarCant, setAgregarCant] = useState(0);

  const { addCarrito } = useContext(CarritoContext);

  const handleCant = (cantidad) => {
    setAgregarCant(cantidad);

    const item = { id, nombre, precio }
    addCarrito(item, cantidad);
  }

  return (
    <div className='contenedorDetalle' >
      <h3 className='colorDetalle' > {nombre} </h3>
      <img src={img} alt={nombre} />
      <p className='colorDetalle' > {descripcion} </p>
      <p className='colorDetalle' > Precio: ${precio} </p>

      {agregarCant > 0 ? (<Link className="btn-finalizar" to="/cart">Finalizar Compra</Link>) : (<ItemCount stock={stock} agregar={handleCant} />)}

    </div>
  )
}

export default ItemDetail