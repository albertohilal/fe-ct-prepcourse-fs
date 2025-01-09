function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  for (var i =0; i <string.length; i++){
    if(string[i] === string[string.length-1-i]){
        console.log(string[i]);
        console.log(string[string.length-1-i]);
        
    }

}


return true;

}
module.exports = esPalindromo;