'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
function platzom(str) {
  var translation = str;
  /*Si la palabra original es un palindromo,
  nunguna regla anterior cuenta y se devuelve
  la misma palabra intercalando mayúsculas y minúsculas*/
  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };
  function minMay(str) {
    var LENGTH = str.length;
    var capitalize = true;
    var translation = '';
    for (var i = 0; i < LENGTH; i++) {
      translation += capitalize ? str[i].toUpperCase() : str[i].toLowerCase();
      capitalize = !capitalize;
    }
    return translation;
  }
  if (str == reverse(str)) {
    return minMay(str);
  }
  //Si la palabra termina en "ar", se le quitan esos dos caracteres
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2);
  }
  //Si la palabra inicia con Z, se le añade "pe" al final
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe';
  }
  //Si la palabra tiene 10 o más letras, se debe partir a la mitad y agregar un guión
  var longitud = str.length;
  if (longitud > 9) {
    var primeraMitad = translation.slice(0, Math.round(longitud / 2));
    var segundaMitad = translation.slice(Math.round(longitud / 2));
    translation = primeraMitad + '-' + segundaMitad;
  }
  return translation;
}