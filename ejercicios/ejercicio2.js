/* 2. Define un objeto que represente un producto con propiedades como nombre, precio y cantidad. Luego, calcula el costo total multiplicando el precio por la cantidad para varios productos y sumando los resultados. */

// Definición del objeto Producto
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    // Método para calcular el costo total del producto
    calcularCostoTotal() {
        return this.precio * this.cantidad;
    }
}

// Ejemplo de productos
const producto1 = new Producto("Camisa", 20, 3);
const producto2 = new Producto("Pantalón", 30, 2);
const producto3 = new Producto("Calcetines", 5, 5);

// Función para calcular el costo total de varios productos
function calcularCostoTotalProductos(...productos) {
    let costoTotal = 0;
    productos.forEach(producto => {
        costoTotal += producto.calcularCostoTotal();
    });
    return costoTotal;
}

// Ejemplo de uso
const costoTotal = calcularCostoTotalProductos(producto1, producto2, producto3);
console.log("El costo total de los productos es:", costoTotal);
