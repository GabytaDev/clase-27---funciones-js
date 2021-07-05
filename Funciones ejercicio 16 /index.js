// FPS son cuadros por segundo (frames per second). Definí una una función
//  calcularFPS que reciba como argumentos una cantidad de cuadros por segundo 
//  y una cantidad de minutos, y devuelva cuántos cuadros hubo en esa cantidad de minutos

//  calcularFPS(1, 1)
// 60
//  calcularFPS(10, 2)
// 1200
//  calcularFPS(2, 3)
// 360

const calcularFPS = (fps , minutos) =>{
    return ((fps * 60) * minutos)
}

calcularFPS(1, 1);
calcularFPS(10, 2);
calcularFPS(2, 3);
