"use strict";

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  // Version iterativa
  /* var resultado = 1
  while (n > 0) {
    resultado = resultado * n
    n--
  }
  return resultado */

  // Version Recursiva
  if (n < 1) return 1;
  return n * nFactorial(n - 1);
}

// n = n - 1 + n - 2;

function nFibonacci(n) {
  // n es una posicion -> 4
  // 0,1,1,2,3
  //         ^   posicion 4
  //

  // caso de corte
  if (n == 0) return 0;
  if (n == 1) return 1;

  // aplicar la recursion
  return nFibonacci(n - 1) + nFibonacci(n - 2);
  //                     3
  //            2       +      1
  //       1    +     1           1 + 0
  //    1   +   0

  // Otra solucion
  if (n < 2) return n;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
  // Otra solucion
  return n < 2 ? n : nFibonacci(n - 1) + nFibonacci(n - 2);
}
nFibonacci(4);

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

//
//[2,3]
function Queue() {
  this.list = [];
  /* this.enqueue = function () { 

  } */
}

Queue.prototype.enqueue = function (arg) {
  this.list.push(arg);
};

Queue.prototype.dequeue = function () {
  return this.list.shift();
};

Queue.prototype.size = function () {
  return this.list.length;
};

const queue1 = new Queue();
console.log(queue1);
console.log(queue1.enqueue(2));
console.log(queue1.list);
console.log(queue1.size());
/* console.log(queue1.dequeue())
console.log(queue1.size());
console.log(queue1.list); */

const queue2 = new Queue();
console.log(queue2);
console.log(queue2.list);

/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};
