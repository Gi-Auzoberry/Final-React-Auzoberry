import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"

const CartItem = ({ item, cantidad }) => {

    const { removeProd } = useContext(CarritoContext);

    return (
        <div>
            <h3> {item.nombre} </h3>
            <img src={item.img} alt={item.nombre} />
            <p> Cantidad: {cantidad} </p>
            <p>Precio unitario: {item.precio} </p>
            <button onClick={() => removeProd(item.id)}> Quitar Producto </button>
        </div>
    )
}

export default CartItem