export default function platzom(str){
  let translation = str;
  /*Si la palabra original es un palindromo,
  nunguna regla anterior cuenta y se devuelve
  la misma palabra intercalando mayúsculas y minúsculas*/
  const reverse = (str) => str.split('').reverse().join('');
  function minMay(str){
    const LENGTH = str.length;
    let capitalize = true;
    let translation = '';
    for(let i=0; i<LENGTH; i++){
      translation += capitalize ? str[i].toUpperCase() : str[i].toLowerCase();
      capitalize = !capitalize;
    }
    return translation;
  }
  if(str == reverse(str)){
    return minMay(str);
  }
  //Si la palabra termina en "ar", se le quitan esos dos caracteres
  if(str.toLowerCase().endsWith('ar')){
    translation = str.slice(0,-2);
  }
  //Si la palabra inicia con Z, se le añade "pe" al final
  if(str.toLowerCase().startsWith('z')){
    translation += 'pe';
  }
  //Si la palabra tiene 10 o más letras, se debe partir a la mitad y agregar un guión
  const longitud = str.length;
  if(longitud > 9){
    let primeraMitad = translation.slice(0, Math.round(longitud/2));
    let segundaMitad = translation.slice(Math.round(longitud/2));
    translation = `${primeraMitad}-${segundaMitad}`;
  }
  return translation;
}
