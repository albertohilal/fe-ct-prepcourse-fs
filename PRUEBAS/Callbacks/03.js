function cb(a,b){
    return a * b;
}
function operacionMatematica(num1, num2, cb) {
    
    return cb(num1,num2);

  }
  console.log(operacionMatematica(5,3,cb));