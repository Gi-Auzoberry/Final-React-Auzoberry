import { useState, createContext } from "react";

export const CarritoContext = createContext({
    carrito: [],
    totalProductos: 0,
    total: 0
})

export const CarritoProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);
    const [totalProductos, setTotalProductos] = useState(0);
    const [total, setTotal] = useState(0);

    const addCarrito = (item, cantidad) => {
        const yaAgregado = carrito.find(prod => prod.item.id === item.id)
        if (!yaAgregado) {
            setCarrito(prev => [...prev, { item, cantidad }])
            setTotalProductos(prev => prev + cantidad)
            setTotal(prev => prev + (item.precio * cantidad))
        } else {
            const reloadCarrito = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad }
                } else {
                    return prod
                }
            })
            setCarrito(reloadCarrito);
            setTotalProductos(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        }
    }

    const removeProd = (id) => {
        const removed = carrito.find(prod => prod.item.id === id)
        const reloadCarrito = carrito.filter(prod => prod.item.id !== id)
        setCarrito(reloadCarrito);
        setTotalProductos(prev => prev - removed.cantidad);
        setTotal(prev => prev - (removed.item.precio * removed.cantidad));
    }

    const vaciarCarrito = () => {
        setCarrito([]);
        setTotalProductos(0);
        setTotal(0);
    }

    return (<CarritoContext.Provider value={{ carrito, total, totalProductos, addCarrito, removeProd, vaciarCarrito }}> {children} </CarritoContext.Provider>)
}