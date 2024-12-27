function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let duplicados = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      duplicados.push(array[i] * 2);
    }
  }
  return duplicados; // Devolvemos el nuevo array
}

module.exports = duplicarElementos;
