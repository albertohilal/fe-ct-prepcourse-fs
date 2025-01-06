function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  var guardado = [];

  // Itera exactamente 10 veces.
  for (var i = 0; i < 10; i++) {
    // Cuando `i === 5`, salta esta iteración.
    if (i === 5) {
      continue;
    }

    // Incrementa num en 2 y lo guarda en el array.
    num += 2;
    guardado.push(num);
  }

  // Retorna el array con los valores finales.
  return guardado;
}

module.exports = continueStatement;