/* Crea una función que reciba un arreglo de cadenas de texto y cuente cuántas veces aparece cada palabra en todas las cadenas. */

function contarPalabras(arr) {
    // Creamos un objeto para almacenar las palabras y sus conteos
    let conteoPalabras = {};

    // Iteramos sobre cada cadena de texto en el arreglo
    arr.forEach(cadena => {
        // Dividimos la cadena en palabras
        const palabras = cadena.split(/\s+/);

        // Iteramos sobre cada palabra
        palabras.forEach(palabra => {
            // Si la palabra ya está en el objeto, incrementamos su conteo
            if (conteoPalabras[palabra]) {
                conteoPalabras[palabra]++;
            } else {
                // Si la palabra no está en el objeto, la inicializamos con un conteo de 1
                conteoPalabras[palabra] = 1;
            }
        });
    });

    // Devolvemos el objeto con el conteo de palabras
    return conteoPalabras;
}

// Ejemplo de uso
const cadenas = ["hola mundo hola", "mundo mundo adios"];
const conteo = contarPalabras(cadenas);
console.log(conteo);
