/* Crea una función que reciba un arreglo de cadenas de texto y cuente cuántas veces aparece cada palabra en todas las cadenas. */

function contarPalabrasIgual(array) {
    let contadorPalabras = {};

    array.forEach(cadena => {
        let palabras = cadena.split(/\s+/);
        palabras.forEach(palabra => {
            if (contadorPalabras[palabra]) {
                contadorPalabras[palabra]++;
            } else {
                contadorPalabras[palabra] = 1;
            }
        });
    });

    return contadorPalabras;
}

let frase = ["hola mundo de nuevo"];
let resultado = contarPalabrasIgual(frase);
console.log(resultado);
