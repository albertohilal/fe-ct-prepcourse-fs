function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  var registros = {};
    for(var i = 0; i<numeros.length; i++){
        if (registros[numeros[i]] === true) {
            
            // Si ya existe en el registro, es repetido
            return numeros[i];
        }else{
            registros[numeros[i]] = true;

        }
    }
  }

module.exports = encontrarElementoRepetido;