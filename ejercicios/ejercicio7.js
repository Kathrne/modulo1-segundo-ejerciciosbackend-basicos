/*  Ordena un arreglo de objetos según una propiedad específica, como la edad o el precio. */

// Arreglo de objetos
const productos = [
    { nombre: "Camisa", precio: 25 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Calcetines", precio: 10 },
    { nombre: "Abrigo", precio: 50 }
];

// Ordenar el arreglo de objetos según la propiedad 'precio'
productos.sort((a, b) => a.precio - b.precio);

// Mostrar el arreglo ordenado
console.log("Arreglo ordenado por precio:");
console.log(productos);
