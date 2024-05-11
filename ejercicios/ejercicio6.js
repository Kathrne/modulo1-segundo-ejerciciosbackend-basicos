/* Crea una función que reciba un arreglo de objetos con propiedades como nombre, edad y género, y busque un objeto específico por nombre. */

// Función para buscar un objeto por nombre en un arreglo de objetos
function buscarPorNombre(personas, nombreABuscar) {
    // Utilizamos el método find() para buscar el objeto con el nombre específico
    return personas.find(persona => persona.nombre === nombreABuscar);
}

// Arreglo de objetos con propiedades como nombre, edad y género
const personas = [
    { nombre: "Juan", edad: 25, genero: "masculino" },
    { nombre: "María", edad: 35, genero: "femenino" },
    { nombre: "Carlos", edad: 40, genero: "masculino" },
    { nombre: "Ana", edad: 28, genero: "femenino" }
];

// Nombre específico que queremos buscar
const nombreABuscar = "María";

// Llamamos a la función para buscar el objeto con el nombre específico
const personaEncontrada = buscarPorNombre(personas, nombreABuscar);

// Mostramos el resultado
if (personaEncontrada) {
    console.log("Persona encontrada:", personaEncontrada);
} else {
    console.log("No se encontró ninguna persona con ese nombre.");
}
