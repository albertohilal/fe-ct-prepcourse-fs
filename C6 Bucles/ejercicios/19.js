function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  // Inicializamos la suma en 0
  let suma = 0;

  // Iteramos desde 1 hasta n (inclusive)
  for (let i = 1; i <= n; i++) {
    suma += i; // Acumulamos la suma
  }

  // Retornamos el resultado después del bucle
  return suma;
}

module.exports = sumarHastaN;
