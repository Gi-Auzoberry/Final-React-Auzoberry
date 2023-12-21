const productos = [
    {id: 1, nombre: "Torta", precio: 4000, img: "./img/1.jpg"},
    {id: 2, nombre: "Cupcakes", precio: 1000, img: "./img/2.jpg"},
    {id: 3, nombre: "Cupcakes Cumpleaños", precio: 1000, img: "./img/3.jpg"},
    {id: 4, nombre: "Cupcake Zanahoria", precio: 1000, img: "./img/4.jpg"},
    {id: 5, nombre: "Mini Torta", precio: 2500, img: "./img/5.jpg"},
    {id: 6, nombre: "Mini Torta", precio: 2500, img: "./img/6.jpg"},
    {id: 7, nombre: "Caja Cupcakes + Regalo", precio: 3000, img: "./img/7.jpg"},
    {id: 8, nombre: "Caja Cupcakes Grande + Regalo", precio: 3500, img: "./img/8.jpg"},
    {id: 9, nombre: "Mini Torta", precio: 2500, img: "./img/9.jpg"},
    {id: 10, nombre: "Mini Torta con Caja", precio: 3000, img: "./img/10.jpg"},
    {id: 11, nombre: "Mini Torta Doble", precio: 3500, img: "./img/11.jpg"},
    {id: 12, nombre: "Treats Naturales", precio: 2000, img: "./img/12.jpg"},
] 

export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout( () => {
            resolve(productos)
        }, 2000)
    })
}

