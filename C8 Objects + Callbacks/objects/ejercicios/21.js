function agregarMetodoCalculoDescuento(objetoProducto) {
  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
  // Ejemplo:
  // Precio ---> 10
  // PorcentajeDeDescuento ---> 0.2
  // Precio final ---> 8
  // Tu código:
  // Agregar la propiedad "calcularPrecioDescuento" al objeto
  objetoProducto.calcularPrecioDescuento = function() {
    // Calcula el precio con descuento
    return this.precio - (this.precio * this.porcentajeDeDescuento);
  };

  // Retornar el objeto modificado
  return objetoProducto;
}

module.exports = agregarMetodoCalculoDescuento;
