import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, nombre, precio, img}) => {
  return (
    <div className='itemCard'>
      <img src={img} alt={nombre} />
      <h4> {nombre} </h4>
      <p className='lpm'>Precio: ${precio}</p>
      <Link className='button' to={`/item/${id}`} > Ver Detalles </Link>
    </div>
  )
}

export default Item