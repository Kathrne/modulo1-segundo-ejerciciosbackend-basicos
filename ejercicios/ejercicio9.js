/* Dado un objeto que representa una lista de compras con elementos y cantidades, genera una lista legible para el usuario mostrando cada elemento y su cantidad. */

// Función para generar una lista legible de compras
function generarListaDeCompras(listaDeCompras) {
    let listaLegible = "Lista de Compras:\n";
    
    // Iterar sobre cada elemento en la lista de compras
    for (let elemento in listaDeCompras) {
        listaLegible += `${elemento}: ${listaDeCompras[elemento]}\n`;
    }

    return listaLegible;
}

// Objeto que representa una lista de compras con elementos y cantidades
const listaDeCompras = {
    "Manzanas": 5,
    "Plátanos": 3,
    "Leche": 2,
    "Pan": 1
};

// Generar la lista legible de compras
const listaLegible = generarListaDeCompras(listaDeCompras);

// Mostrar la lista legible de compras
console.log(listaLegible);
