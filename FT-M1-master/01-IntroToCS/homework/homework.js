"use strict";

function BinarioADecimal(num) {
  var suma = 0;
  var exponente = num.length - 1;

  for (let i = 0; i < num.length; i++) {
    const digito = num[i];
    const operacion = digito * 2 ** exponente;
    suma = suma + operacion;
    exponente--;
  }
  return suma;

  // Otra solucion:
  // return parseInt(num, 2)
}

console.log(BinarioADecimal("100"));

function DecimalABinario(num) {
  var resultado = "";
  while (num !== 0) {
    resultado = num + 2 + resultado;
    num = Math.floor(num / 2);
  }

  // Otra solucion:
  /* var numBinario = "";
   for (let i = 0; num > 0; i++) {
     var resto = num % 2;
     numBinario = resto + numBinario;
     num = Math.floor(num / 2);
   }
   return numBinario; */

  // Otra solucion:
  // return num.toString(2)
}

console.log(DecimalABinario(25));

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
