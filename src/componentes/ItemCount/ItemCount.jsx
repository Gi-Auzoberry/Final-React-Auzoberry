import { useState } from "react";
import './ItemCount.css';


const ItemCount = ({ stock, agregar }) => {

    const [contador, setContador] = useState(1);

    const incrementar = () => {
        if (contador < stock) {
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

