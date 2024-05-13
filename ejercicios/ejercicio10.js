/* Toma dos arreglos de objetos que representen listas de estudiantes y profesores, y crea una nueva lista combinada con todos los miembros de la comunidad educativa */

// Arreglo de objetos que representan estudiantes
let estudiante = [
    {nombre:"Alberto", edad:26},
    {nombre: "Sarai", edad:24},
    {nombre: "Francisco", edad:26}
]

let profesores = [
    {nombre:"Genaro", Materia: "Matematicas"},
    {nombre:"Marta", Materia: "Lenguaje"},
    {nombre: "Salvador", Materia:"Ciencias"}
]


function combinarObjetos (a, b){

    let comunidadEducativa = [...a, ...b]
    return comunidadEducativa
}

let comunidad = combinarObjetos(estudiante, profesores)

console.log(comunidad);