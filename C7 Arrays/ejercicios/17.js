function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let suma = 0;
  for (var i = 0; i < arrayOfNums.length; i++) {
    if (typeof arrayOfNums[i] === "number") {
      suma = suma + arrayOfNums[i];
    }
  }
  return suma;
}

module.exports = agregarNumeros;
