/* Crea una función que valide si un objeto tiene todas las propiedades requeridas, como nombre, dirección y teléfono. */

// Función para validar si un objeto tiene todas las propiedades requeridas
function validarObjeto(objeto){

    const propiedades = ['nombre', 'direccion', 'telefono'];

    for (let propiedad of propiedades){
        if(objeto.hasOwnProperty(propiedad)){

            let mjs = "Objeto Aprobado"
            return mjs

        }else{
            let mjs = "Objeto NO Aprobado"
            return mjs   
        }
    }
    
    

}

let cliente = {nombre:"Katherine" , 
direccion:"San Salvador",
telefono: 1239474930}
console.log(validarObjeto(cliente));