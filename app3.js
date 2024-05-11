/* 3. DESARROLLAR UN LOGARITOMO QUE PERMITA MOSTRAR EL IMC DE UNA PERSONA, UTILIZANDO UN METODO MOSTRAR LA RESPUESTA SEGÚN LOS DATOS QUE SOLICITA LA FORMULA. */

// Definición del objeto Persona
const Persona = {
  nombre: "",
  peso: 0,
  altura: 0,

  // Método para calcular el IMC
  calcularIMC: function() {
    const imc = this.peso / Math.pow(this.altura, 2);
    return imc.toFixed(2);
  },

  // Método para mostrar la respuesta según el IMC
  mostrarResultadoIMC: function(imc) {
    let mensaje = "";
    if (imc < 18.5) {
      mensaje = "Bajo peso";
    } else if (imc >= 18.5 && imc < 25) {
      mensaje = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
      mensaje = "Sobrepeso";
    } else {
      mensaje = "Obesidad";
    }
    console.log(`${this.nombre} tiene un IMC de ${imc} - ${mensaje}`);
  }
};

// Creación de una instancia de persona
const persona1 = Object.create(Persona);
persona1.nombre = "Ejemplo";
persona1.peso = 70; // en kg
persona1.altura = 1.75; // en metros

// Calcular el IMC
const imcPersona1 = persona1.calcularIMC();

// Mostrar el resultado del IMC
persona1.mostrarResultadoIMC(imcPersona1);
