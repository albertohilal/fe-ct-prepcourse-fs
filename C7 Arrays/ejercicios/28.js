function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:

  if(Array.isArray(arr)=== true){
    if (arr.length !==0){
        return true;
      }else{
        return false;
      }      
}else{
    return false;
}

}

module.exports = esArrayNoVacio;