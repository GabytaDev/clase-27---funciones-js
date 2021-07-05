// 6 - Definí una función gritar que reciba como argumento un string y devuelva el mismo string 
//con un signo de exclamación al principio y al final del mismo

//  gritar('hola')
//   ¡hola!
//  gritar('aaaaaa')
//   ¡aaaaaa!
let algo = "hola";

const gritar = (algo) => {
    return ("¡" + algo + "!")
}

// 7 - Definí una función obtenerNombreCompleto que reciba como argumento un nombre y un apellido y 
//devuelva un string con la unión de ambos valores

//  obtenerNombreCompleto('Ada', 'Lovelace')
// 'Ada Lovelace'

let nombre = "Ada";
let apellido = "Lovelace";

const obtenerNombreCompleto = (nombre , apellido) => {
    return (nombre + " " + apellido);
}
const nombrecompleto = obtenerNombreCompleto (); 

// 8 -Definí una función saludar que tome por parámetros un nombre y devuelva un saludo que lo incluya.

//  saludar('Ada')
// 'Hola Ada, un gusto conocerte'

let nombre = "Ada";

const saludar = (nombre) => {
    return ('Hola '+ nombre + ', un gusto conocerte')
}

// 9 - Usando las funciones anteriores (obtenerNombreCompleto, saludar y gritar), definí una 
//función saludarGritando que reciba como argumentos un nombre y un apellido y devuelva un 
//saludo con signos de exclamación.

//  saludarGritando('Ada', 'Lovelace') 
// ¡Hola Ada Lovelace, un gusto conocerte!

