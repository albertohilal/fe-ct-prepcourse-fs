function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  // Inicializamos el contador
  let contador = 0;

  // Iteramos sobre el array
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      contador++; // Incrementamos el contador si el elemento es mayor a 10
    }
  }

  // Retornamos el contador
  return contador;
}

module.exports = contarElementosMayoresA10;
