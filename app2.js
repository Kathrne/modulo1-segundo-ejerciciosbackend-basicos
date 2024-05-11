/* 2. DESAROLLE UN ALGORITMO QUE LE PERMITA MOSTRAR LA HORA ACTUAL EN UN MENSAJE, PARA ESTE EJERCICIO DEBERA DE DECLARAR LA INSTANCIA FECHA PARA UNA NEW DATE() Y LAS VARIABLES RECEPTORAS DE LA HORA (HORA, MINUTOS Y SEGUNDOS) SOLICITARLO LOS DATOS CON .GETHOURS(), .GETMINUTES Y .GETSECONDS. */_

// Crear una instancia de Date
const fechaActual = new Date();

// Obtener horas, minutos y segundos
const horas = fechaActual.getHours();
const minutos = fechaActual.getMinutes();
const segundos = fechaActual.getSeconds();

// Mostrar la hora actual en un mensaje
console.log(`La hora actual es: ${horas}:${minutos}:${segundos}`);
