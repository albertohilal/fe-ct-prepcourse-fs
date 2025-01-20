var objetoProducto = {
    precio: 100, // Precio original del producto
    porcentajeDeDescuento: 0.2, // Porcentaje de descuento (20%)
  };
  
  function agregarMetodoCalculoDescuento(objetoProducto) {
    objetoProducto.calcularPrecioDescuento = function() {
        // Calcula el precio con descuento
        return this.precio - (this.precio * this.porcentajeDeDescuento);
      };
    
      // Retornar el objeto modificado
      return objetoProducto;
    }
  
  // Ejemplo de uso
  console.log(agregarMetodoCalculoDescuento(objetoProducto)); // Salida: 80
  