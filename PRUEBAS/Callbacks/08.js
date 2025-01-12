var array = ["acordeon", "guitarra", "flauta", "armonica", "bateria", "arpa"];

var callback = function (elemento) {
  // Evalúa si el elemento es igual a "flauta"
  return elemento === "flauta";
};

const buscarElemento = (array, callback) => {
  for (var i = 0; i < array.length; i++) {
    var resultado = callback(array[i]);
    if (resultado === true) {
      return array[i]; // Retorna el elemento encontrado
    }
  }
  // Si el bucle termina sin encontrar el elemento, retorna el mensaje
  return "No se encontró el elemento";
};

// Llamada a la función
console.log(buscarElemento(array, callback)); // Salida: "flauta"
