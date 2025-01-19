var objeto = {
    nombre: 'alberto',
    email: 'albertohilal@gmail.com',
    metodo: function() {
      return 'Hola que tal?';
    }
  };
  
  function invocarMetodo(objeto, metodo) {
    // Acceder a la propiedad dinámica del objeto con notación de corchetes
    // e invocar la función correspondiente
    objeto[metodo]();
  }
  
  // Ejemplo de uso
  invocarMetodo(objeto, 'metodo'); // Esto ejecutará la función "metodo"
  