import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({nombre, img, descripcion, precio}) => {

  const [agregarCant, setAgregarCant]= useState(0);

  //FUNCION PARA MODIFICAR LUEGO. A VER QUE ONDA :
  const handleCant = (cantidad) => {
    setAgregarCant(cantidad);

    console.log(`Esto lo sacare luego, pero se agregaron ${cantidad} de produtos`)
  }
  
  return (
    <div className='contenedorDetalle' >
        <h3 className='colorDetalle' > {nombre} </h3>
        <img src={img} alt={nombre} />
        <p className='colorDetalle' > {descripcion} </p>
        <p className='colorDetalle' > Precio: ${precio} </p>

        {
          agregarCant > 0 ? (<Link to= "/cart">Finalizar Compra</Link>) : (<ItemCount agregar={handleCant} />)
        }

    </div>
  )
}

export default ItemDetail