function encontrarElemento(num, array) {
  // Busca el número pasado por argumento dentro del array.
  // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:
  // Usamos el método indexOf para buscar el índice del elemento
  // Usamos el método indexOf para buscar el índice del elemento
  const indice = array.indexOf(num);

  // Retornamos el índice directamente porque indexOf ya devuelve -1 si no se encuentra
  return indice;
}

module.exports = encontrarElemento;
