/* Crea una función que reciba un arreglo de objetos con propiedades como nombre, edad y género, y busque un objeto específico por nombre. */

let personas = [
    {nombre: "Nixon", edad: 26, genero: "Hombre"},
    {nombre: "Eli", edad: 23, genero: "Mujer"},
    {nombre: "Damaris", edad: 24, genero:"Mujer"},
    {nombre: "Samuel", edad: 27, genero:"Hombre"}
  ];
  
  function buscarPorNombre(arrayPersona, nombre){
    return arrayPersona.find(objeto => objeto.nombre === nombre);
  }
  
  let personaBuscada = buscarPorNombre(personas, "Larissa");
  console.log(personaBuscada);
  