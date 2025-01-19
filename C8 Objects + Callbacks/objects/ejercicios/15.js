function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  if (objeto.hasOwnProperty(propiedad)) {
    return true; // Retorna true si la propiedad existe
  } else {
    return false; // Retorna false si no existe
  }
}

module.exports = tienePropiedad;
