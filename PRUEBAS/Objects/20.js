var objetoUsuario = {
    nombre: 'Alberto',
    email: 'albertohilal@gmail.com',
    posts: [
      {
        id: 1,
        titulo: 'Mi primer post',
        likes: 25
      },
      {
        id: 2,
        titulo: 'Aprendiendo JavaScript',
        likes: 40
      },
      {
        id: 3,
        titulo: 'Viaje a la montaña',
        likes: 15
      },
      {
        id: 4,
        titulo: 'Recetas de cocina',
        likes: 30
      }
    ]
  };

function sumarLikesDeUsuario(objetoUsuario) {
    // El parámetro "objetoUsuario" 
    // tiene una propiedad llamada "posts" que es un arreglo.
    // Este arreglo contiene objetos (post).
    // Cada post posee una propiedad llamada "likes". 
    // Esta propiedad es un número.
    // Debes sumar los likes de todos los post y retornar el resultado.
    // Tu código:
    let totalLikes = 0; // Inicializamos el contador de likes

  // Recorremos el arreglo "posts" dentro del objeto "objetoUsuario"
  for (let i = 0; i < objetoUsuario.posts.length; i++) {
    totalLikes += objetoUsuario.posts[i].likes; // Sumamos los likes de cada post
    
  }

  return totalLikes; // Retornamos el total de likes
}

console.log(sumarLikesDeUsuario(objetoUsuario)); // Salida: 110
