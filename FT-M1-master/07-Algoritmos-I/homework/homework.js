"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  // 180 | 2 -> residuo = 0
  //   90| 2 -> r = 0
  //   45|3
  //   15|3
  //    5|5
  //    1|1
  //    1

  let factores = [1];
  let divisor = 2;

  while (num > 1) {
    if (num % divisor === 0) {
      factores.push(divisor);
      // num -> 90
      num = num / divisor;
      // num -> 1
    } else divisor++;
  }

  return factores;
}

// ALGORITMOS DE ORDENAMIENTO

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // [1, 4, 5, 2, 8]
  //     i
  //          j
  // aux -> 4
  // let aux;
  /* for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        aux = array[i];
        array[i] = array[j];
        array[j] = aux;
      }
    }
  } */
  // [1, 2, 4, 5, 8]
  //              j
  //                j+1
  // aux -> 2

  let swap = true;

  while (swap) {
    swap = false;
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let aux = array[j];
        array[j] = array[j + 1];
        array[j + 1] = aux;
        swap = true;
      }
    }
  }
  return array;
}
console.log(bubbleSort([5, 1, 4, 2, 8]));

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // [1, 2, 4, 5, 8]
  //              i
  //           j j+1
  // elem -> 2
  // j -> 0
  /* for (let i = 1; i < array.length; i++) {
    const element = array[i];
    // elem -> 8
    let j = i - 1;
    while (j >= 0 && element < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = element;
  }
  return array; */

  // Solucion 2
  // [1, 4, 5, 2, 8]
  //           i
  //  j-1 j
  //
  // temp -> 4
  // j -> 0
  var temp;
  for (let i = 1; i < array.length; i++) {
    // haciendo el cambio de los 2 primeros arreglos
    if (i == 1) {
      // solo cuando comienza compara y cambia los valores
      if (array[i] < array[i - 1]) {
        temp = array[i];
        array[i] = array[i - 1];
        array[i - 1] = temp;
      }
      /// este es para todos los demas del arreglos
    } else if (i > 1) {
      for (let j = i; j > 0; j--) {
        // compara de derecha a izquierda los valores e inserta el valor al final
        if (array[j] < array[j - 1]) {
          temp = array[j];
          array[j] = array[j - 1];
          array[j - 1] = temp;
        }
      }
    }
  }
  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // [1, 2, 4, 5, 8]
  //                 i
  //                 j
  // minIndex -> 4
  // array[minIndex] -> 8
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    // Este for nos sirve para calcular el menor de todos
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (array[minIndex] < array[i]) {
      let aux = array[i];
      array[i] = array[minIndex];
      array[minIndex] = aux;
    }
  }
  return array;
}

// Todos estos metodos de ordenamiento tienen complejidad de o(n^2)

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
