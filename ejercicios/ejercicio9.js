/* Dado un objeto que representa una lista de compras con elementos y cantidades, genera una lista legible para el usuario mostrando cada elemento y su cantidad. */

// Función para generar una lista legible de compras
let listaCompras = {
    "Manzana": 5,
    "Platanos": 4,
    "Uvas": 3,
    "Peras":3
}


function generarListaCompras(listaCompras){

    let listaLegible="Lista de compras: \n"
    
    for (let elemento in listaCompras){
        listaLegible += `${elemento} : ${listaCompras[elemento]} unidades\n`
    }
    return listaLegible


}

let listaLegible = generarListaCompras(listaCompras)
console.log(listaLegible);