// Definí una función sumarPorcentaje que tome como argumentos un número 
// y un porcentaje y devuelva la suma de dicho número con la de su porcentaje. 
// Usar la función calcularPorcentaje para obtener el porcentaje a sumar

//  sumarPorcentaje(100, 15)
// 115
//  sumarPorcentaje(10, 50)
// 15
//  sumarPorcentaje(200, 10)
// 220

const calcularPorcentaje = (numero, porcentaje) => {
    return ( (numero* porcentaje)/100)
}

calcularPorcentaje (100, 15); //valores de los parametros
calcularPorcentaje (10, 50);
calcularPorcentaje (200, 10);


const sumarPorcentaje = (numero , calcularPorcentaje) => {
    return (numero + calcularPorcentaje)
}

sumarPorcentaje(100, 15);
sumarPorcentaje(10, 50);
sumarPorcentaje(200, 10);



console.log (sumarPorcentaje());