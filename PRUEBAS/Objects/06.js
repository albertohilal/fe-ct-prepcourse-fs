const usuario = {
  nombre: "Alberto",
  apellido: "Hilal",
  correo: "albertohilal@gmail.com",
};

const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  var contador = 0;
  for (const propiedad in objeto) {
    contador++; // Incrementa el contador por cada propiedad
  }

  return contador;
};
console.log(contarPropiedades(usuario));
