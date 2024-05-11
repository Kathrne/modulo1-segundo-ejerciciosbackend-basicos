/* Crea una función que valide si un objeto tiene todas las propiedades requeridas, como nombre, dirección y teléfono. */

// Función para validar si un objeto tiene todas las propiedades requeridas
function validarObjeto(objeto, propiedadesRequeridas) {
    // Iterar sobre las propiedades requeridas
    for (let i = 0; i < propiedadesRequeridas.length; i++) {
        // Verificar si la propiedad requerida está presente en el objeto
        if (!objeto.hasOwnProperty(propiedadesRequeridas[i])) {
            // Si falta alguna propiedad requerida, retornar false
            return false;
        }
    }
    // Si todas las propiedades requeridas están presentes, retornar true
    return true;
}

// Ejemplo de uso
const objeto = {
    nombre: "Juan",
    direccion: "Calle A",
    telefono: "123456789"
};

// Propiedades requeridas
const propiedadesRequeridas = ["nombre", "direccion", "telefono"];

// Validar el objeto
const esValido = validarObjeto(objeto, propiedadesRequeridas);

// Mostrar el resultado
if (esValido) {
    console.log("El objeto tiene todas las propiedades requeridas.");
} else {
    console.log("El objeto no tiene todas las propiedades requeridas.");
}
