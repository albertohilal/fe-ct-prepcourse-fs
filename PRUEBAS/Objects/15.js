var objeto = {
    nombre: 'alberto',
    email: '',
    propiedad: 'propiedad'
  };
  var propiedad = 'propiedad';
  
  function tienePropiedad(objeto, propiedad) {
    // Verifica si el objeto tiene una propiedad con el nombre dado
    if (objeto.hasOwnProperty(propiedad)) {
      return true; // Retorna true si la propiedad existe
    } else {
      return false; // Retorna false si no existe
    }
  }
  
  console.log(tienePropiedad(objeto, propiedad)); // Salida: true
  