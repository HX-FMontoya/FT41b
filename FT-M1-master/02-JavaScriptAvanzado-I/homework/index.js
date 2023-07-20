// Primer codigo
/* x = 1;
var a = 5;
var b = 10;
console.log(b)
var c = function (a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function (a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b);
};
c(8, 9, 10);
console.log(b);
console.log(x);
// 10 8 8 9 10 1 */

// Segundo

/* console.log(bar); // und
//console.log(baz); // is not defined
foo(); // "Hola"
function foo() {
  console.log("Hola!");
}
var bar = 1;
console.log(bar);
baz = 2; */

// Tercero

/* var instructor = "Tony";
if (true) {
  var instructor = "Franco";
}
console.log(instructor); // Franco  */

// Cuarto

/* var instructor = "Tony";
console.log(instructor); // Tony
(function () {
  if (true) {
    var instructor = "Franco";
    console.log(instructor); // Franco
  }
  console.log(instructor); // Franco
})();
console.log(instructor); // Tony */

// Quinto

/* var instructor = "Tony";
let pm = "Franco";
if (true) {
  var instructor = "The Flash";
  let pm = "Reverse Flash";
  console.log(instructor); // The Flash
  console.log(pm); // Reverse Flash || Franco
}
console.log(instructor); // The Flash
console.log(pm); // Franco */

// Sexto -> Coercion de Datos

/* 6 / "3" // -> 6 / 3 -> 2
"2" * "3" // 2 * "3" -> 2 * 3 -> 6
4 + 5 + "px" // 9 + "px" -> "9px"
"$" + 4 + 5 // "$" + 4 -> "$4" + 5 -> "$45" 
"4" - 2 // 4 - 2 -> 2
"4px" - 2 // NaN -> Not An Number
7 / 0 // Infinity
{}[0] // Undefined
parseInt("09") // 9
5 && 2 // 2
2 && 5 // 5
5 || 0 // 5
0 || 5 // 5
[3] + [3] - [10] // [23]
3 > 2 > 1 // false   
[] == ![] // true */

// HOISTING

/* function test() {
  // L.E -> a = und, foo()
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}
test(); */

// Segundo ejercicio

/* var snack = "Meow Mix";

function getFood(food) {
  if (food) {
    var snack = "Friskies";
    return snack;
  }
  return snack;
}

console.log(getFood(false)); */

// This

global.fullname = "Juan Perez";
var obj = {
  fullname: "Natalia Nerea",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      console.log(this);
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());

// EVENT LOOP

/* function printing() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
}

printing(); */
