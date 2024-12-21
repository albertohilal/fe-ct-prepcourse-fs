function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:
  let suma = 0;

  // Iteramos desde 1 hasta n (inclusive)
  for (let i = 1; i <= n; i++) {
    suma += i; // Acumulamos la suma

    // Si la suma supera 100, rompemos el bucle
    if (suma > 100) {
      break;
    }
  }

  // Retornamos la suma acumulada
  return suma;
}

module.exports = sumarHastaNConBreak;
