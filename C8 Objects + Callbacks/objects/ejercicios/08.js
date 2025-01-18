function crearGato(nombre, edad) {
  // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
  // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
  // Además, agregar una propiedad con el nombre "meow".
  // La propiedad "meow" será una función que retorne el string: "Meow!".
  // Retornar el objeto.
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

module.exports = crearGato;
