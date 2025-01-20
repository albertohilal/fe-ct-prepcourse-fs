var objetoUsuario = {
    nombre: 'alberto',
    email: 'albertohilal@gmail.com',
    password: 'elgeneral2018',
    amigos:['Ricardo','Sofia', 'Carlos']
  };
  var nuevoAmigo = 'Viviana';

function agregarAmigo(objetoUsuario, nuevoAmigo) {
    // El parámetro "objetoUsuario" 
    // tiene una propiedad llamada "amigos" igual a un arreglo.
    // Debes agregar el "nuevoAmigo" al final de este arreglo.
    // Retornar el objeto.
    // Tu código:
    objetoUsuario.amigos.push(nuevoAmigo);
    return objetoUsuario;
  }
  console.log(agregarAmigo(objetoUsuario, nuevoAmigo));