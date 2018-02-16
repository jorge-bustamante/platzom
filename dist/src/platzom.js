'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
function platzom(str) {
  var translation = str;

  // Si la palabra original es un palíndromo,
  // ninguna regla anterior cuenta y se devuelve
  // la misma palabra intercalando mayúsculas y minúsculas

  function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;
    for (var i = 0; i < length; i++) {
      var char = str.charAt(i); //charAt extrae 1 caracter en la posicion que se le indique del string.
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }

    return translation;
  }

  //str no tiene la función reverse. Convertimos el string a array diciendole que tome un caracter y divida
  //el string con base a ese caracter. En este caso no ponemos caracter, por lo cual se divide por letras.
  //Hacemos reverse al array, y despues le damos join para pegar todos esos caracteres del arreglo en un string.
  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };

  if (str == reverse(str)) {
    return minMay(str);
  }

  //1.- Si la palabra termina en "ar", se le quitan esos dos caracteres
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2); //slice corta caracteres, se le dice que corte del caracter 0 hasta el final -2
  }

  //2,- Si la palabra inicia con z, se le añade "pe" al final
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe';
  }

  //3.- Si la palabra traducida tiene 10 o más letras,
  // se debe partir a la mitad y unir con un guión del medio
  var length = translation.length;
  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var secondHalf = translation.slice(Math.round(length / 2));
    translation = firstHalf + '-' + secondHalf;
  }

  return translation;
}