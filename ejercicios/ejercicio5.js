/* Toma un arreglo de números y utiliza una iteración para sumar únicamente los números pares. */

// Arreglo de números
let numeros = [1,2,3,4,5,6,7,8,9,10]

let sumaPares = 0;

for(let i=0; i< numeros.length; i++){
    if(numeros [i] % 2 === 0){
        sumaPares += numeros[i];
    }
}

console.log(sumaPares);
