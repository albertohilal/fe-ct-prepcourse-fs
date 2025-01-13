const usuario = {
  nombre: "Alberto",
  apellido: "Hilal",
  correo: "albertohilal@gmail.com",
};

const obtenerValorPropiedad = (objeto, propiedad) => {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  // Tu código:
  const a = objeto[propiedad];

  return a;
};

console.log(obtenerValorPropiedad(usuario, "apellido"));
