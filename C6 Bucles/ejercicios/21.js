function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  // Si el número es menor o igual a 0, no puede ser una potencia de 2

  if (numero <= 0) {
    return false;
  }

  // Inicializamos una variable para calcular las potencias de 2
  let potencia = 0;

  // Usamos un bucle para calcular las potencias de 2 hasta que superemos el número dado
  while (Math.pow(2, potencia) <= numero) {
    // Si encontramos que la potencia coincide con el número, es potencia de 2
    if (Math.pow(2, potencia) === numero) {
      return true;
    }
    potencia++;
  }

  // Si salimos del bucle, el número no es una potencia de 2
  return false;
}

module.exports = esPotenciaDeDos;
