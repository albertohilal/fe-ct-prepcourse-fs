function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  // Inicializamos el índice y el valor máximo
  let indiceMayor = 0;
  let valorMayor = array[0];

  // Recorremos el array para encontrar el valor más grande y su índice
  for (let i = 1; i < array.length; i++) {
    if (array[i] > valorMayor) {
      valorMayor = array[i]; // Actualizamos el valor más grande
      indiceMayor = i; // Actualizamos el índice del valor más grande
    }
  }

  // Retornamos el índice del número más grande
  return indiceMayor;
}

module.exports = encontrarIndiceMayor;
