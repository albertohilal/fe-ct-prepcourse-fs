const objetoMisterioso = {
  numeroMisterioso: 8
};


function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // El parámetro "objetoMisterioso" posee una propiedad 
  // con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y 
  // retornar el resultado.

  resultado =objetoMisterioso.numeroMisterioso * 5;

  return resultado;
}
console.log(multiplicarNumeroDesconocidoPorCinco(objetoMisterioso));