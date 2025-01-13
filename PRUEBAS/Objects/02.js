const objeto = {
  nombre: "Alberto",
  apellido: "Hilal",
  correo: "albertohilal@gmail.com",
};

function actualizarValorPropiedad(objeto, propiedad, valor) {
  // Actualiza el valor de la propiedad del objeto recibidos en la función.
  // Retorna el objeto actualizado.
  // Tu código:
  //   usuario["nombre"] = valor;
  //   return usuario;
  objeto["propiedad"] = valor;
  return objeto;
}
console.log(actualizarValorPropiedad(objeto, "nombre", "Carlos"));
