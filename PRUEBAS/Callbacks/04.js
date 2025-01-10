
var arrayOfNumbers = [1,2,3,4];
var cb = function(suma){
    return suma * 2;
}

function sumarArray(arrayOfNumbers, cb) {
    
    var sumando = 0;
        for( var i = 0; i< arrayOfNumbers.length;i++){
        sumando = sumando + arrayOfNumbers[i];
        
    }
      return cb(sumando);
 }
 console.log(sumarArray(arrayOfNumbers, cb));