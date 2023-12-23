import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductoIndividual } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const [productoIndividual,setProductoIndividual] = useState(null)
    
    let {idItem} = useParams()
    idItem = Number(idItem)

    useEffect( () => {
        getProductoIndividual(idItem)
            .then(respuesta => setProductoIndividual(respuesta))
    }, [idItem])

  return (
    <div>
        <ItemDetail {...productoIndividual} />
    </div>
  )
}

export default ItemDetailContainer