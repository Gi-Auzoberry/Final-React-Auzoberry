const productos = [
    {id: 1, nombre: "Torta", precio: 4000, img: "../img/1.jpg",categoria: "Tortas", stock: 15, descripcion: "Acá iría una descripcion del producto :)"},
    {id: 2, nombre: "Cupcakes", precio: 1000, img: "../img/2.jpg",categoria: "Cupcakes", stock: 15, descripcion: "Acá iría una descripcion del producto :)"},
    {id: 3, nombre: "Cupcakes Cumpleaños", precio: 1000, img: "../img/3.jpg",categoria: "Cupcakes", stock: 15, descripcion: "Acá iría una descripcion del producto :)"},
    {id: 4, nombre: "Cupcake Zanahoria", precio: 1000, img: "../img/4.jpg",categoria: "Cupcakes", stock: 15, descripcion: "Acá iría una descripcion del producto :)"},
    {id: 5, nombre: "Mini Torta", precio: 2500, img: "../img/5.jpg",categoria: "Tortas", stock: 15, descripcion: "Acá iría una descripcion del producto :)"},
    {id: 6, nombre: "Mini Torta", precio: 2500, img: "../img/6.jpg",categoria: "Tortas", stock: 15, descripcion: "Acá iría una descripcion del producto :)"},
    {id: 7, nombre: "Caja Cupcakes + Regalo", precio: 3000, img: "../img/7.jpg",categoria: "Cupcakes", stock: 15, descripcion: "Acá iría una descripcion del producto :)"},
    {id: 8, nombre: "Caja Cupcakes Grande + Regalo", precio: 3500, img: "../img/8.jpg",categoria: "Cupcakes", stock: 15, descripcion: "Acá iría una descripcion del producto :)"},
    {id: 9, nombre: "Mini Torta", precio: 2500, img: "../img/9.jpg",categoria: "Tortas", stock: 15, descripcion: "Acá iría una descripcion del producto :)"},
    {id: 10, nombre: "Mini Torta con Caja", precio: 3000, img: "../img/10.jpg",categoria: "Tortas", stock: 15, descripcion: "Acá iría una descripcion del producto :)"},
    {id: 11, nombre: "Mini Torta Doble", precio: 3500, img: "../img/11.jpg",categoria: "Tortas", stock: 15, descripcion: "Acá iría una descripcion del producto :)"},
    {id: 12, nombre: "Treats Naturales", precio: 2000, img: "../img/12.jpg",categoria: "Treats", stock: 15, descripcion: "Acá iría una descripcion del producto :)"},
] 

export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout( () => {
            resolve(productos)
        }, 2000)
    })
}

export const getProductoIndividual = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const productoIndividual = productos.find(item => item.id === id)
            resolve(productoIndividual)
        }, 2000)
    })
}

export const getProductosCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const productosCategoria = productos.filter(item => item.categoria === idCategoria)
            resolve(productosCategoria)
        }, 2000)
    })
}