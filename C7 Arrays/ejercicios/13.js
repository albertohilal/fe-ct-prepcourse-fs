function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var arrayNuevo = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      arrayNuevo.push(array[i]);
    }
  }
  return arrayNuevo;
}

module.exports = filtrarNumerosPares;
