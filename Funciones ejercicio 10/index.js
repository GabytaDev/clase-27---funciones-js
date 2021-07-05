// Definí una función obtenerDatosDeCiudad que tome por parámetros un string nombre,
// un número poblacion y un string pais y devuelva string con el siguiente 
//formato: La ciudad de NOMBRE tiene una población de POBLACION habitantes y está ubicada en PAIS

//  obtenerDatosDeCiudad('Santa Fe', 545606, 'Argentina') 
// 'La ciudad de Santa Fe tiene una población de 545606 habitantes y está ubicada en Argentina'



const obtenerDatosDeCiudad = (nombre , poblacion , pais ) => {
    

    return ("La ciudad de " + nombre + " tiene una población de " + poblacion + " habitantes y está ubicada en " + pais)
}


obtenerDatosDeCiudad ( "Santa Fe " , "545606 " , "Argentina ");

