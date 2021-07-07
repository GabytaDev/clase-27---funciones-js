// Usando las funciones anteriores (obtenerNombreCompleto, saludar y gritar), definí una 
// función saludarGritando que reciba como argumentos un nombre y un apellido y 
// devuelva un saludo con signos de exclamación.

//  saludarGritando('Ada', 'Lovelace') 
// ¡Hola Ada Lovelace, un gusto conocerte!

let nombre = "Ada";
let apellido = "Lovelace";

const gritar = (nombre) => {
    return ("¡" + nombre + "!")
}

const obtenerNombreCompleto = (nombre , apellido) => {
    return (nombre + " " + apellido);
}

const nombrecompleto = obtenerNombreCompleto (); 


const saludar = (nombre) => {
    return ('Hola '+ nombre + ', un gusto conocerte')
}


const saludarGritando = (nombre, apellido) => {
    return gritar (saludar (obtenerNombreCompleto (nombre, apellido)))
} 

saludarGritando ('Ada', 'Lovelace') ;

