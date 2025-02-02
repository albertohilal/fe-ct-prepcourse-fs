const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
  for (var i = 0; i < array.length; i++) {
    var resultado = callback(array[i]);
    if (resultado === true) {
      return array[i]; // Retorna el elemento encontrado
    }
  }
  // Si el bucle termina sin encontrar el elemento, retorna el mensaje
  return "No se encontró el elemento";
};
module.exports = buscarElemento;
