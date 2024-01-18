import { useState, useEffect, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from '../../services/config';
import { collection, addDoc } from "firebase/firestore";


const Checkout = () => {

    const { carrito, vaciarCarrito, total, totalProductos } = useContext(CarritoContext)

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [tel, setTel] = useState("")
    const [mail, setMail] = useState("")
    const [mailConfirm, setMailConfirm] = useState("")
    const [ordenId, setOrdenId] = useState("")
    const [error, setError] = useState("")

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
            })
            .catch(error => {
                setError("No pudimos procesar tu orden, por favor revisa el código")
            })
    }

    return (
        <div>
            <h2> Checkout </h2>
            <form onSubmit={handleForm}>
                {carrito.map(producto => (
                    <div key={producto.item.id}>
                        <p> {producto.item.nombre} x {producto.cantidad} </p>
                        <p> Precio: $ {producto.item.precio} </p>
                    </div>
                ))}

                <div>
                    <label htmlFor=""> Nombre </label>
                    <input type="text" id="nombre" placeholder="nombre" onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                    <label htmlFor=""> Apellido </label>
                    <input type="text" id="apellido" placeholder="Apellido" onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div>
                    <label htmlFor=""> Teléfono </label>
                    <input type="text" id="tel" placeholder="ingresa tu número de teléfono" onChange={(e) => setTel(e.target.value)} />
                </div>
                <div>
                    <label htmlFor=""> Correo Electónico </label>
                    <input type="email" id="mail" placeholder="name@example.com" onChange={(e) => setMail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor=""> Confirma tu Correo Electónico </label>
                    <input type="email" id="mail" placeholder="name@example.com" onChange={(e) => setMailConfirm(e.target.value)} />
                </div>

                {error && <h4> {error} </h4>}

                <button type="submit"> Finalizar Compra </button>

                {ordenId && (
                    <h3> ¡Muchas gracias por tu compra! El número de orden es: {ordenId} </h3>
                )}
            </form>
        </div>
    )
}

export default Checkout
