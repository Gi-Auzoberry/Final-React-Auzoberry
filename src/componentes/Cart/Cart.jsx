import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import './Cart.css'

const Cart = () => {

    const { carrito, totalProductos, total, vaciarCarrito } = useContext(CarritoContext);

    if (totalProductos === 0) {
        return (
            <>
                <h2> Aún no hay productos en tu carrito</h2>
                <img src="../img/gatito pastelero.jpg" alt="Imagen de gatito jugando con azucar" id="img-emptycart" />
                <Link to="/" id="btn-agregarcart"> Ver Productos </Link>
            </>
        )
    }
    return (
        <div id="contenedor-cart">
            <h3 id="titulo-carrito"> Carrito de Compras </h3>
            {carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)}
            <p className="p-cart"> Cantidad total de Productos: {totalProductos} </p>
            <p> Total de la Compra: ${total} </p>
            <button onClick={() => vaciarCarrito()} className="btn-vaciar"> Vaciar Carrito </button>
            <div className="btns-link">
                <Link className="finalizar-compra" to="/checkout"> Finalizar Compra </Link>
                <Link className="mas-productos" to="/" > Ver más Productos </Link>
            </div>
        </div>
    )
}

export default Cart