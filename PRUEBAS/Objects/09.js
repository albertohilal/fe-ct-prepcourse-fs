var nombre='alberto';
var email= 'albertohilal@gmail.com';
var password ='elgeneral2018'

function nuevoUsuario(nombre, email, password) {
    // Debes crear un nuevo objeto.
    // Este debe tener las propiedades:
    //  "nombre", "email" y "password" 
    // con sus respectivos valores.
    // Retorna el objeto creado.
    // Tu código:
    var usuario={
        nombre:'',
        email:'',
        password:''
    };
    usuario.nombre= nombre;
    usuario.email = email;
    usuario.password = password;
    return usuario;

  }
  console.log(nuevoUsuario(nombre, email, password));