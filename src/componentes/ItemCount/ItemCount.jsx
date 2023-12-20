import { useState } from "react";


const ItemCount = () => {

    const[contador, setContador] = useState(1);

    let stockDisponible = 15;

    const incrementar = () => {
        if (contador < stockDisponible) {
            setContador(contador + 1);
        }
    }
    const decrementar = () => {
        if(contador > 1) {
            setContador(contador - 1);
        }
    }

  return (
    <div>
        <button onClick={decrementar}> - </button>
        <p> Cantidad: {contador} </p>
        <button onClick={incrementar}> + </button>
    </div>
  )
}

export default ItemCount