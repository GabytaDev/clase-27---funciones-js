// Definí una función convertirHorasEnSegundos que reciba como argumento un número de horas 
//y devuelva la conversión a segundos de dicha cantidad de horas

//  convertirHorasEnSegundos(1)
// 3600
//  convertirHorasEnSegundos(3)
// 10800
// convertirHorasEnSegundos(4.5)
// 16200

const convertirHorasEnSegundos = (hora) => {
    return (hora * 3600)
}

convertirHorasEnSegundos (1);
convertirHorasEnSegundos (3);
convertirHorasEnSegundos (4.5);

let resultado = convertirHorasEnSegundos
console.log (resultado);