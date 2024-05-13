/* 2. Define un objeto que represente un producto con propiedades como nombre, precio y cantidad. Luego, calcula el costo total multiplicando el precio por la cantidad para varios productos y sumando los resultados. */

const productoA = {
    nombre: "camisa",
    precio: 25,
    cantidad: 5
};

const productoB = {
    nombre: "pantalones",
    precio: 40,
    cantidad: 3
};

let costoTotalProductoA = productoA.precio * productoA.cantidad;
let costoTotalProductoB = productoB.precio * productoB.cantidad;

let costoTotal = costoTotalProductoA+costoTotalProductoB

console.log(`El costo total del primer producto es :${"$"+costoTotalProductoA}`);
console.log(`El costo total del segundo producto es: ${"$"+costoTotalProductoB}`);

console.log(`El costo total es: ${"$"+costoTotal}`);