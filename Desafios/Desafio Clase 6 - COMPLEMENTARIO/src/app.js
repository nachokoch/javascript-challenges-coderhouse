
let productos = [
    {
        "nombre": "remera",
        "precio": "3000"
    },{
        "nombre": "pantalon",
        "precio": "6000"
    },{
        "nombre": "gorra",
        "precio": "2700"
    },{
        "nombre": "arito",
        "precio": "800"
    },{
        "nombre": "lentes de sol",
        "precio": "1500"
    },
]

let ordenarProductos = (arr) => {
    productos.sort((a,b) => parseFloat(a.precio) - parseFloat(b.precio));
}

ordenarProductos(productos)
console.log(productos)