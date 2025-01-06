function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  var valores = [];

    for (var i = 1; i <= 10; i++) {
        num += 2; // Incrementa num en 2
        valores.push(num); // Guarda el nuevo valor en el arreglo

        // Verifica si el valor de num es igual al número de iteraciones
        if (num === i) {
            return "Se interrumpió la ejecución"; // Retorna el mensaje y detiene la función
        }
    }

    // Retorna el arreglo si el bucle se completa sin interrupción
    return valores;
}


module.exports = breakStatement;
