import './ItemDetail.css';

const ItemDetail = ({nombre, img, descripcion, precio}) => {
  return (
    <div className='contenedorDetalle' >
        <h3 className='colorDetalle' > {nombre} </h3>
        <img src={img} alt={nombre} />
        <p className='colorDetalle' > {descripcion} </p>
        <p className='colorDetalle' > Precio: ${precio} </p>
    </div>
  )
}

export default ItemDetail