function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
   var sumando = 0;
        for( var i = 0; i< arrayOfNumbers.length;i++){
        sumando = sumando + arrayOfNumbers[i];
        
    }
      return cb(sumando);
 }

module.exports = sumarArray;
