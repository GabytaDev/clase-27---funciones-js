// Definí una función restarPorcentaje que reciba como argumentos un número 
// y un porcentaje y devuelva la resta de dicho número con la de su porcentaje. 
// Usar la función calcularPorcentaje para obtener el porcentaje a restar

//  restarPorcentaje(100, 15)
// 85
//  restarPorcentaje(10, 40)
// 6
//  restarPorcentaje(200, 10)
// 180


const calcularPorcentaje = (numero, porcentaje) => {
    return ( (numero* porcentaje)/100)
}


const restarPorcentaje = (numero, porcentaje) => {
    return (numero - (calcularPorcentaje (numero, porcentaje)))
}

restarPorcentaje(100, 15)
85
restarPorcentaje(10, 40)
6
restarPorcentaje(200, 10)
180