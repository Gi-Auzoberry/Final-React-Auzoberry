import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { getProductos, getProductosCategoria } from '../../asyncmock';
import { db } from '../../services/config';
import { collection, getDocs, where, query } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';


const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([])
  const { idCategoria } = useParams()

  useEffect(() => {

    const verProductos = idCategoria ? query(collection(db, "productos"), where("categoria", "==", idCategoria)) : collection(db, "productos");

    getDocs(verProductos)
      .then(res => {
        const nuevoProductos = res.docs.map(item => {
          const data = item.data();
          return { id: item.id, ...data }
        })
        setProductos(nuevoProductos);
      })
  }, [idCategoria])

  /*useEffect (() => {
    const verCategoria= idCategoria ? getProductosCategoria : getProductos
    verCategoria(idCategoria)
      .then(respuesta => setProductos(respuesta))
  }, [idCategoria])
  */

  return (
    <div className='contenedorCards'>
      <h2> {greeting} </h2>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer

