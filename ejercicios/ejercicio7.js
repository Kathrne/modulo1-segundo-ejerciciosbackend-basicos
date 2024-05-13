/*  Ordena un arreglo de objetos según una propiedad específica, como la edad o el precio. */

let persona = [
    {nombre:"Damaris", edad :24 },
    {nombre:"Nixon", edad :26 },
    {nombre:"Eli", edad :23 },
    {nombre:"Samuel", edad :27 }
]

let PersonasOrdenadas = persona.sort((a, b) => a.edad -b.edad)
console.log(PersonasOrdenadas);