function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  if (objetoUsuario.email) {
    return true; // Retorna true si existe y tiene un valor
  } else {
    return false; // Retorna false si no tiene un valor
  }
}

module.exports = tieneEmail;
