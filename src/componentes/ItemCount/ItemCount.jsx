import { useState } from "react";
import './ItemCount.css';


const ItemCount = ({ agregar }) => {

    const [contador, setContador] = useState(1);

    let stockDisponible = 15;

    const incrementar = () => {
        if (contador < stockDisponible) {
            setContador(contador + 1);
        }
    }
    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    return (
        <div className="contador">
            <button onClick={decrementar}> - </button>
            <p> Cantidad: {contador} </p>
            <button onClick={incrementar}> + </button>
            <button className="btn-contador" onClick={() => agregar(contador)}> Agregar </button>
        </div>
    )
}

export default ItemCount

