/* Toma un arreglo de objetos que representen personas con propiedades como nombre, edad y ciudad, y filtra las personas mayores de 30 años que viven en una ciudad específica. */

// Arreglo de objetos que representan personas
const personas = [
    { nombre: "Juan", edad: 25, ciudad: "Madrid" },
    { nombre: "María", edad: 35, ciudad: "Barcelona" },
    { nombre: "Carlos", edad: 40, ciudad: "Madrid" },
    { nombre: "Ana", edad: 28, ciudad: "Valencia" }
];

// Función para filtrar personas mayores de 30 años que viven en una ciudad específica
function filtrarPersonasMayores(personas, ciudad) {
    return personas.filter(persona => {
        return persona.edad > 30 && persona.ciudad === ciudad;
    });
}

// Ciudad específica para filtrar
const ciudadEspecifica = "Madrid";

// Filtrar personas mayores de 30 años que viven en la ciudad específica
const personasFiltradas = filtrarPersonasMayores(personas, ciudadEspecifica);

// Mostrar resultados
console.log("Personas mayores de 30 años que viven en", ciudadEspecifica + ":");
console.log(personasFiltradas);
