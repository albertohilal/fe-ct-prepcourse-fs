function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  const menor = Math.min(a, b);
  const mayor = Math.max(a, b);

  // Si el rango incluye 0, el producto será 0
  if (menor <= 0 && mayor >= 0) {
    return 0;
  }

  // Inicializamos el producto en 1
  let producto = 1;

  // Iteramos desde el número menor hasta el número mayor (inclusive)
  for (let i = menor; i <= mayor; i++) {
    producto *= i; // Multiplicamos el producto por el número actual
  }

  // Retornamos el resultado
  return producto;
}

module.exports = productoEntreNúmeros;
