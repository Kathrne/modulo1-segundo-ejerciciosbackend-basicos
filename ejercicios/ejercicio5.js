/* Toma un arreglo de números y utiliza una iteración para sumar únicamente los números pares. */

// Arreglo de números
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Variable para almacenar la suma de los números pares
let sumaPares = 0;

// Iteración sobre el arreglo de números
for (let i = 0; i < numeros.length; i++) {
    // Verificar si el número en la posición actual es par
    if (numeros[i] % 2 === 0) {
        // Si es par, sumarlo a la variable sumaPares
        sumaPares += numeros[i];
    }
}

// Mostrar la suma de los números pares
console.log("La suma de los números pares es:", sumaPares);
