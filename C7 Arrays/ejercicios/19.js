function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  var multiplico=1;

    for(var i = 0; i<arguments.length;i++){
        multiplico = multiplico * arguments[i];
    }
    return multiplico;

  }

module.exports = multiplicarArgumentos;
