// Definí una función calcularPuntaje que calcule el puntaje de un 
// examen que consiste en ejercicios de distinto nivel. Debe recibir 
// como argumento tres numeros que consisten en la cantidad de ejercicios resueltos 
// en cada nivel y devolver un número con el puntaje correspondiente. 
// El puntaje se calcula de la siguiente forma:

// facil: 3 puntos
// normal: 5 puntos
// dificil: 10 puntos

//  calcularPuntaje(3, 0, 0) 
// 9
//  calcularPuntaje(0, 2, 1) 
// 20
//  calcularPuntaje(5, 1, 2)
// 40

let facil = 3;
let normal = 5;
let dificil= 10;



const calcularPuntaje = (num1, num2, num3) =>{
 
    return (num1 * 3) + (num2 * 5)  + (num3 * 10);
   
}


calcularPuntaje(3, 0, 0); 

calcularPuntaje(0, 2, 1);

calcularPuntaje(5, 1, 2);


  