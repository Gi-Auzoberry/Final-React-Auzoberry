import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductos, getProductosCategoria } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';


const ItemListContainer = ({greeting}) => {
  
  const [productos, setProductos] = useState([])
  const {idCategoria} = useParams()
  
  useEffect (() => {
    const verCategoria= idCategoria ? getProductosCategoria : getProductos
    verCategoria(idCategoria)
      .then(respuesta => setProductos(respuesta))
  }, [idCategoria])
  
  return (
    <div className='contenedorCards'>
      <h2> {greeting} </h2>
      <ItemList productos = {productos} />
    </div>
  )
}

export default ItemListContainer