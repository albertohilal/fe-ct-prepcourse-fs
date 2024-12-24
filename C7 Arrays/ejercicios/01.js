function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido.
  // Tu código:
  // Verificamos si el arreglo está vacío
  if (array.length === 0) {
    return undefined; // Si está vacío, retornamos undefined
  }

  // Retornamos el primer elemento del arreglo
  return array[0];
}

module.exports = devolverPrimerElemento;
