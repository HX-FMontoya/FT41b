const traverseDomAndCollectElements = function (
  matchFunc,
  startEl = document.body
) {
  let resultSet = [];
  /* if (typeof startEl === "undefined") {
    startEl = document.body;
  } */

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }

  for (let i = 0; i < startEl.children.length; i++) {
    // [div, div, span]
    const element = startEl.children[i]; // div
    let aux = traverseDomAndCollectElements(matchFunc, element);
    resultSet = [...resultSet, ...aux];
    // matchFunctionMaker(element) // true
    // matchFunc(element)
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

const selectorTypeMatcher = (selector) => {
  // tu código aquí
  // #miId, .myClass, div, div.myClass
  if (selector[0] === "#") return "id";
  if (selector[0] === ".") return "class";
  /* if (selector.split(".").length > 1) {
    return "tag.class";
  } */
  if (selector.includes(".")) return "tag.class";
  else return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

const matchFunctionMaker = function (selector) {
  // #miId, .myClass, div, div.myClass
  const selectorType = selectorTypeMatcher(selector);
  // "id" , "class" , "tag", "tag.class"
  let matchFunction;
  if (selectorType === "id") {
    // obj = <div id="uno"></div>
    // obj.id -> uno
    /* matchFunction = function (element) {
      // selector -> #uno
      // elemnt.id -> uno
      // if ("#" + element.id === selector) {
      //   return true
      // }
      return `#${element.id}` === selector;
    } */
    matchFunction = (element) => `#${element.id}` === selector;
  } else if (selectorType === "class") {
    /* matchFunction = function (element) {
      // selector -> .myClass
      let clases = element.classList; // ["bg-b-300", "border-200"]
      //
      for (const clas of clases) {
        // .myClass
        if ("." + clas === selector) {
          return true;
        }
      }
      return false;
      // contains -> metodo del DOM
      //
    }; */
    matchFunction = (element) => element.classList.contains(selector.slice(1));
  } else if (selectorType === "tag.class") {
    matchFunction = function (element) {
      // <div class="myClass"></div>
      // div.myClass -> ["div", "myClass"]
      // const tag = selector.split(".")[0]; // div
      // const clase = selector.split(".")[1]; // myClass

      const [tag, clase] = selector.split(".");

      // recursion
      // const result = matchFunctionMaker(tag)(element); // div
      // result(element); // -> true
      // const result2 = matchFunctionMaker(`.${clase}`)(element); // myClass
      // result2(element); // -> true

      /* if (result && result2) {
        return true
      } else {
        return false
      } */

      // return result && result2
      return (
        matchFunctionMaker(tag)(element) &&
        matchFunctionMaker(`.${clase}`)(element)
      );
    };
  } else if (selectorType === "tag") {
    matchFunction = function (element) {
      // <div></div> -> tagName -> "DIV" -> "div"
      /* if (element.tagName.toLowerCase() === selector) {
        return true
      } */
      return element.tagName.toLowerCase() === selector;
    };
  }
  return matchFunction;
};

const $ = function (selector) {
  // "div.myClass"
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  // selectorMatchFunc(elem) -> guarda la closure
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

// $("div.myClass") -> [<h1></h1>,<div...]
