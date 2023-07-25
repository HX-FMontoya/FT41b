"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  // this.size = 0;
}

BinarySearchTree.prototype.insert = function (arg) {
  // arg -> 8
  if (arg <= this.value) {
    if (this.left) {
      this.left.insert(arg);
    } else {
      this.left = new BinarySearchTree(arg);
      // this.size++
    }
  } else {
    if (this.right) {
      this.right.insert(arg);
    } else {
      this.right = new BinarySearchTree(arg);
      // this.size++;
    }
  }
};

BinarySearchTree.prototype.size = function () {
  let count = 1;
  if (this.left) count += this.left.size();
  if (this.right) count += this.right.size();
  return count;

  /* let count = 1;
   if (this.left && this.left.size()) count++;
   if (this.right && this.right.size()) count++;
   return count; */
};

BinarySearchTree.prototype.contains = function (target) {
  // target -> 7
  if (this.value === target) return true;

  if (target < this.value) {
    if (this.left) {
      return this.left.contains(target);
    }
  }

  if (target > this.value) {
    if (this.right) {
      return this.right.contains(target);
    }
  }

  return false;
};

// RECORRIDOS

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  // in - order -> izq - nodo - der
  // pre - order -> nodo - izq - der
  // post - order -> izq - der - nodo

  if (order === "in-order" || order === undefined) {
    if (this.left && this.left.depthFirstForEach(cb, order));
    cb(this.value);
    if (this.right && this.right.depthFirstForEach(cb, order));
  }
  if (order === "pre-order") {
    cb(this.value);
    if (this.left && this.left.depthFirstForEach(cb, order));
    if (this.right && this.right.depthFirstForEach(cb, order));
  }
  if (order === "post-order") {
    if (this.left && this.left.depthFirstForEach(cb, order));
    if (this.right && this.right.depthFirstForEach(cb, order));
    cb(this.value);
  }
};

/* BinarySearchTree.prototype.depthFirstForEach = function (
  fn,
  order = "in-order"
) {
  if (order === "pre-order") {
    fn(this.value);
  }

  if (this.left) {
    this.left.depthFirstForEach(fn, order);
  }
  if (order === "in-order") {
    fn(this.value);
  }
  if (this.right) {
    this.right.depthFirstForEach(fn, order);
  }
  if (order === "post-order") {
  }
}; */

BinarySearchTree.prototype.breadthFirstForEach = function (cb, arr = []) {
  if (this.left) arr.push(this.left);
  if (this.right) arr.push(this.right);
  cb(this.value);
  if (arr.length > 0) {
    arr.shift().breadthFirstForEach(cb, arr);
  }
};

const instanciaArbol = new BinarySearchTree(8);
console.log(instanciaArbol);
console.log(instanciaArbol.size());
instanciaArbol.insert(7);
console.log(instanciaArbol.contains(7));
console.log(instanciaArbol);
//    (1)
//   / \
//  2   3
// / \
//4   5
// \ / \

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
