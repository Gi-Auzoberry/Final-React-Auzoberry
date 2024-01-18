import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart = () => {

    const { carrito, totalProductos, total, vaciarCarrito } = useContext(CarritoContext);

    if (totalProductos === 0) {
        return (
            <>
                <h2> No hay productos en tu carrito</h2>
                <Link to="/"> Ver Productos </Link>
            </>
        )
    }
    return (
        <div>
            { carrito.map( producto => <CartItem key={producto.item.id} {...producto} />) }
            <p> Cantidad total: {totalProductos} </p>
            <p> Total: ${total} </p>
            <button onClick={ () => vaciarCarrito() }> Vaciar Carrito </button>
            <Link to="/checkout"> Finalizar Compra </Link>
        </div>
    )
}

export default Cart