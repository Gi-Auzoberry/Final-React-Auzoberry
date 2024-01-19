import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from '../../services/config';
import { collection, addDoc, getDoc, updateDoc } from "firebase/firestore";
import './Checkout.css';


const Checkout = () => {

    const { carrito, vaciarCarrito, total, totalProductos } = useContext(CarritoContext)

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [tel, setTel] = useState("")
    const [mail, setMail] = useState("")
    const [mailConfirm, setMailConfirm] = useState("")
    const [ordenId, setOrdenId] = useState("")
    const [error, setError] = useState("")
    const [mostrarOrden, setMostrarOrden] = useState(true)

    const handleForm = (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !tel || !mail || !mailConfirm) {
            setError("Por favor, completa todos los campos")
            return;
        }
        if (mail !== mailConfirm) {
            setError("El correo electrónico no coincide, ingresalo nuevamente")
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            productos: totalProductos,
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono: tel,
            mail
        }

        addDoc(collection(db, "orders"), orden)
            .then(docRef => {
                setOrdenId(docRef.id)
                vaciarCarrito()
                setNombre("");
                setApellido("");
                setTel("");
                setMail("");
                setMailConfirm("");
                setMostrarOrden(false);
            })
            .catch(error => {
                setError("No pudimos procesar tu orden, por favor revisa el código")
            })
    }

    return (
        <>
            <h2> Checkout </h2>
            <form onSubmit={handleForm} className="form-checkout">
                {mostrarOrden && (
                    <div id="orden-de-compra">
                        {carrito.map(producto => (
                            <div key={producto.item.id} id="checkout">
                                <img src={producto.item.img} alt="fotito" className="img-checkout" />
                                <p> {producto.item.nombre} x {producto.cantidad} </p>
                                <p> Precio: $ {producto.item.precio} </p>
                            </div>
                        ))}
                    </div>
                )}

                <div id="form-orden">
                    <div className="nombreYapellido">
                        <label htmlFor=""> Nombre: </label>
                        <input type="text" id="nombre" placeholder="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        <label htmlFor=""> Apellido: </label>
                        <input type="text" id="apellido" placeholder="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    </div>
                    <div className="tel">
                        <label htmlFor=""> Teléfono: </label>
                        <input type="text" id="tel" placeholder="ingresa tu número de teléfono" value={tel} onChange={(e) => setTel(e.target.value)} />
                    </div>
                    <div className="mail">
                        <label htmlFor=""> Correo Electónico: </label>
                        <input type="email" id="mail" placeholder="name@example.com" value={mail} onChange={(e) => setMail(e.target.value)} />
                    </div>
                    <div className="mailConf">
                        <label htmlFor=""> Confirma tu Correo Electónico: </label>
                        <input type="email" id="mailConf" placeholder="name@example.com" value={mailConfirm} onChange={(e) => setMailConfirm(e.target.value)} />
                    </div>

                    {error && <h4> {error} </h4>}

                    <button type="submit" id="submit"> Finalizar Compra </button>
                </div>
            </form>

            {ordenId && (
                <div id="orden-fin">
                    <img src="../img/gatito cumple.jpeg" alt="Gatito festejando su cumpleaños" id="michi-cumple" />
                    <p id="grax"> ¡Muchas gracias por tu compra! <br /> El número de orden es: {ordenId} </p>
                </div>
            )}
        </>
    )
}

export default Checkout
