/* Dado un arreglo de números, crea una nueva lista con los cuadrados de cada número utilizando el método map(). */

// Arreglo de números
const numeros = [1, 2, 3, 4, 5];

// Función para calcular el cuadrado de un número
const calcularCuadrado = num => num * num;

// Utilizando el método map() para crear una nueva lista con los cuadrados de cada número
const cuadrados = numeros.map(calcularCuadrado);

// Mostrar la nueva lista con los cuadrados
console.log("Lista de cuadrados:", cuadrados);
