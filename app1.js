/* crea en objetos 1. MUESTRE EN UNA TERMINAL LOS COMPORTAMIENTOS DE UN BEBE COMO
• LLORAR
• DORMIR
• COMER
LOS COMPORTAMIENTOS DEBEN DE INCLUIR SOLO UN MENSAJE CON LOS ATRIBUTOS CORRESPONDIENTES PARA EL BEBE (ANTONIO, DE 3 MESES, SONIA DE 5 MESES Y JAVIER DE 8 MESES). */

// Definición del objeto Bebé
const Bebe = {
  nombre: "",
  edad: 0,

  // Método para llorar
  llorar: function() {
    console.log(`${this.nombre} está llorando.`);
  },

  // Método para dormir
  dormir: function() {
    console.log(`${this.nombre} está durmiendo.`);
  },

  // Método para comer
  comer: function() {
    console.log(`${this.nombre} está comiendo.`);
  }
};

// Creación de instancias de bebé con diferentes edades
const antonio = Object.create(Bebe);
antonio.nombre = "Antonio";
antonio.edad = 3;

const sonia = Object.create(Bebe);
sonia.nombre = "Sonia";
sonia.edad = 5;

const javier = Object.create(Bebe);
javier.nombre = "Javier";
javier.edad = 8;

// Ejemplos de comportamientos
antonio.llorar();
sonia.dormir();
javier.comer();
