var objetoMuchosUsuarios = [
    {
      nombre: 'Alberto',
      email: 'albertohilal@gmail.com',
      esPremium: true
    },
    {
      nombre: 'Viviana',
      email: 'viviana123@gmail.com',
      esPremium: false
    },
    {
      nombre: 'Federico',
      email: 'federico89@gmail.com',
      esPremium: true
    },
    {
      nombre: 'Lucía',
      email: 'lucia_love@gmail.com',
      esPremium: false
    },
    {
      nombre: 'Nacho',
      email: 'nacho.rock@gmail.com',
      esPremium: true
    }
  ];

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
    // El parámetro "objetoMuchosUsuarios" 
    // es un arreglo de objetos (usuarios).
    // Cada usuario tiene una propiedad llamada "esPremium".
    // Define esta propiedad de todos los usuarios como true.
    // Retornar el arreglo.
    // Tu código:
    for(var i = 0; i<objetoMuchosUsuarios.length; i++){
        objetoMuchosUsuarios[i].esPremium = true;
        
    }
    return objetoMuchosUsuarios;
  };
  console.log(pasarUsuarioAPremium(objetoMuchosUsuarios));