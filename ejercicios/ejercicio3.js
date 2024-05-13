/* Toma un arreglo de objetos que representen personas con propiedades como nombre, edad y ciudad, y filtra las personas mayores de 30 años que viven en una ciudad específica. */

// Arreglo de objetos que representan personas
let personas = [
    {nombre: "Nixon", edad: 26, ciudad: "San Salvador, Soyapango"},
    {nombre: "Eli", edad: 23, ciudad: "La Libertad, Zaragoza"},
    {nombre: "Damaris", edad: 24, ciudad: "San Salvador, Soyapango"},
    {nombre: "Samuel", edad: 27, ciudad: "San Salvador, Ilopango"}
  ];
  
  function filtrarPersonas(personaObjeto, ciudad) {
    return personaObjeto.filter(persona => persona.edad > 19 && persona.ciudad.includes(ciudad));
  }
  
  let personasFiltradas = filtrarPersonas(personas, "Usulutan");
  console.log(personasFiltradas);