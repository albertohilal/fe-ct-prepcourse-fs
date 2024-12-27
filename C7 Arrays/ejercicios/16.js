function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let resultado = [];

  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      resultado.push(array[i] * i);
    }
  }

  // Retornamos el nuevo arreglo
  return resultado;
}

module.exports = multiplicarElementosPorIndice;
