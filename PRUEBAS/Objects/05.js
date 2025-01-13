const usuario = {
  nombre: "Alberto",
  apellido: "Hilal",
  correo: "albertohilal@gmail.com",
};

const listarPropiedades = (objeto) => {
  // Lista y retorna todas las propiedades que posee el objeto recibido por la función.
  // PISTA: Puedes usar el método Object.keys().
  // Tu código:
  var propiedades = Object.keys(objeto);

  return propiedades;
};

console.log(listarPropiedades(usuario));
