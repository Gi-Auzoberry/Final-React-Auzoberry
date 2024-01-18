import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { getDoc, doc } from "firebase/firestore";
// import { getProductoIndividual } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const [productoIndividual,setProductoIndividual] = useState(null)
    const {idItem} = useParams()
    
    useEffect( () => {
      const nuevoDoc = doc(db, "productos", idItem)
    
      getDoc(nuevoDoc)
        .then( res => {
          const data = res.data()
          const nuevoProductoIndividual = {id: res.id, ...data}
    
          setProductoIndividual(nuevoProductoIndividual)
        })
    }, [idItem])
    
    //idItem = Number(idItem)
    /*useEffect( () => {
        getProductoIndividual(idItem)
            .then(respuesta => setProductoIndividual(respuesta))
    }, [idItem])
  */

  return (
    <div>
        <ItemDetail {...productoIndividual} />
    </div>
  )
}

export default ItemDetailContainer

