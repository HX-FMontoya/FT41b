// (function () {
// IIFE
/* var whiteboard = window.whiteboard;
  var socket = window.io(window.location.origin); */

// CommonJS
/* const whiteboard = require("./whiteboard");
const io = require("socket.io-client");
const socket = io(window.location.origin); */

// ES6
import whiteboard from "./whiteboard";
import io from "socket.io-client";
const socket = io(window.location.origin);

// app -> raiz -> el que recibe todo
// whiteboard -> recibe/requiere y da/exporta
// event-emitter -> da/exporta

socket.on("connect", function () {
  console.log("Connected!");
});

socket.on("load", function (strokes) {
  strokes.forEach(function (stroke) {
    var start = stroke.start;
    var end = stroke.end;
    var color = stroke.color;
    whiteboard.draw(start, end, color, false);
  });
});

socket.on("draw", function (start, end, color) {
  whiteboard.draw(start, end, color, false);
});

whiteboard.on("draw", function (start, end, color) {
  socket.emit("draw", start, end, color);
});

// })();

// Tanto CommonJS como con ES6 no es necesario exportar nada porque app es el nodo raiz, el entry point

/// Archivo que importa/requiere

/// Archivos que requieren y al mismo tiempo exportan -> whiteboard

/// Archivos que solo exportan -> event-emmiter
