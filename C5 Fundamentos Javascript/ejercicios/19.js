function suma(x, y) {
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado de la suma de estos argumentos.
  // Por ejemplo:
  // 5, 5 ---> 10
  // -5, 5 ---> 0
  // Tu código:
  if (typeof x !== "number" || typeof y !== "number") {
    return "Error: Ambos argumentos deben ser números";
  }
  return x + y;
}

module.exports = suma;
