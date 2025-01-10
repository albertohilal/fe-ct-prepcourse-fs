function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  // Tu código:
  // Itera sobre el arreglo y ejecuta el callback con cada elemento
  for (var i = 0; i < array.length; i++) {
    cb(array[i]); // Ejecuta el callback con el elemento actual
}
}
module.exports = forEach;
