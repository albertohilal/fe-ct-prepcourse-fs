function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  // Recorremos el arreglo
  for (var i = 0; i < array.length; i++) {
    // Verificamos si el elemento es un string y tiene al menos 5 caracteres
    if (typeof array[i] === "string" && array[i].length >= 5) {
      return array[i]; // Retornamos el primer string que cumple la condición
    }
  }
  return undefined; // Si no se encuentra ningún string, retornamos undefined
}

module.exports = obtenerPrimerStringLargo;
