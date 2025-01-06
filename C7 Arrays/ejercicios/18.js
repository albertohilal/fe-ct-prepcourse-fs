function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  // Inicializamos una variable para almacenar la suma
  let suma = 0;

  // Iteramos sobre los elementos del array
  for (var i = 0; i < resultadosTest.length; i++) {
    suma = suma + resultadosTest[i]; // Acumulamos los valores
  }

  // Calculamos el promedio dividiendo la suma entre el número de elementos
  let promedio = suma / resultadosTest.length;

  // Retornamos el promedio
  return promedio;
}

module.exports = promedioResultadosTest;
