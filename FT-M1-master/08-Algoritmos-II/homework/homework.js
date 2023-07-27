"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //
  //       Piv
  // [5, 1, 4, 2, 8 ]
  //    Piv
  // [1,2] [4] [5,8]
  //               Piv
  // [1] [2] [4] [5,8]
  //
  // [1] [2] [4] [5] [8]
  // concat
  // [1,2,4,5,8]

  // Caso de corte o caso base
  if (array.length <= 1) return array;

  // Def piv
  let position = Math.floor(array.length / 2);
  let pivot = array[position];
  // Def arrays auxiliares
  let left = [];
  let equal = [];
  let right = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else if (array[i] > pivot) {
      right.push(array[i]);
    } else {
      equal.push(array[i]);
    }
  }
  return quickSort(left).concat(equal, quickSort(right));
  // return quickSort(left).concat(equal).concat(quickSort(right));
}

// [2].concat([3, 3, 3, 3]).concat([4]); // -> [2,3,3,3,3].concat()

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //okey probemos ahora
  //
  //     ^
  // [5, 1, 4, 2, 8]
  // [5]  [1,4,2,8]
  // [5] [1] [4,2,8]
  // [5] [1] [4] [2,8]
  // [5] [1] [4] [2] [8]
  // nlog(n)
  // [5, 1, 4, 2, 8]
  // [5,1]  [4,2,8]
  // [5] [1] [4] [2, 8]
  // [5] [1] [4] [2] [8]
  //  ^   ^
  // [1,5]  [2,4]  [8]
  //    ^        ^
  // [1,2,4,5] [8]
  //         ^  ^
  // [1,2,4,5,]

  // Caso de corte
  if (array.length < 2) return array;
  // Dividirlo
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);
  // middle = 2
  //        ^
  // [5, 1, 4, 2, 8]
  // left -> [5,1]
  // right -> [4,2,8]

  ///        [5,1]            right
  //      [5]   [1]
  //     [] [] [] []       [] [] [] []
  //     ^  ^
  //     []
  let newArray = [];
  console.log(left);
  left = mergeSort(left); // [5] [1]
  // middle -> 2/2 -> 1 ->
  //    ^
  // [5,1]
  // left -> [5]
  // [5]
  // right -> [1]
  //  [1]
  // console.log(left)
  right = mergeSort(right);

  // A esta altura ya los tenemos desglosados
  // Iterar para mergear
  //
  // [5] [] [4] [2] [8]
  // ^   ^
  // [1]

  while (left.length && right.length) {
    left[0] < right[0]
      ? newArray.push(left.shift())
      : newArray.push(right.shift());
  }
  // Agregamos los que hayan quedado falando luego del merge
  // Para este caso [1,2,4,5] [8], queda
  // [] [8]
  //  ^  ^
  // [1,2,4,5] -> newArray
  // newArray -> [1].concat(left).concat(right)
  newArray = newArray.concat(left, right);
  return newArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
