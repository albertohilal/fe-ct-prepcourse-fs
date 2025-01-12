function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  var nuevoArreglo = [];

  for (var i = 0; i < arrayOfStrings.length; i++) {
    var indiceEn = arrayOfStrings[i].indexOf("a");
    if (indiceEn === 0) {
      nuevoArreglo.push(arrayOfStrings[i]);
    }
  }
  return nuevoArreglo;
}

module.exports = filter;
