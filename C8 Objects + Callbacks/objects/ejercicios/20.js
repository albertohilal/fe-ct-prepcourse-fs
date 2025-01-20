function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  let totalLikes = 0; // Inicializamos el contador de likes

  // Recorremos el arreglo "posts" dentro del objeto "objetoUsuario"
  for (let i = 0; i < objetoUsuario.posts.length; i++) {
    totalLikes += objetoUsuario.posts[i].likes; // Sumamos los likes de cada post
    
  }

  return totalLikes; // Retornamos el total de likes
}
module.exports = sumarLikesDeUsuario;
