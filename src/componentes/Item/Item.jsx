import './Item.css';

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='itemCard'> 
        <img src= {img} alt= {nombre} />
        <h4> {nombre} </h4>
        <p>Precio: ${precio}</p>
        <p>ID : {id} </p>
        <button> Ver Detalles </button>
    </div>
  )
}

export default Item