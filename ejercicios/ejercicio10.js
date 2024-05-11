/* Toma dos arreglos de objetos que representen listas de estudiantes y profesores, y crea una nueva lista combinada con todos los miembros de la comunidad educativa */

// Arreglo de objetos que representan estudiantes
const estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Carlos", edad: 21 }
];

// Arreglo de objetos que representan profesores
const profesores = [
    { nombre: "Ana", edad: 35, materia: "Matemáticas" },
    { nombre: "Pedro", edad: 40, materia: "Historia" }
];

// Función para combinar los arreglos de estudiantes y profesores
function combinarComunidadEducativa(estudiantes, profesores) {
    // Concatenar los dos arreglos
    return estudiantes.concat(profesores);
}

// Crear la nueva lista combinada
const comunidadEducativa = combinarComunidadEducativa(estudiantes, profesores);

// Mostrar la nueva lista combinada
console.log("Lista combinada de estudiantes y profesores:");
console.log(comunidadEducativa);
