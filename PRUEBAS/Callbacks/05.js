var array = ['carlos', 'viviana', 'federico', 'nacho'];

// Callback que convierte un elemento en mayúsculas
var cb = function(elemento) {
    console.log(elemento.toUpperCase());
};

function forEach(array, cb) {
    // Itera sobre el arreglo y ejecuta el callback con cada elemento
    for (var i = 0; i < array.length; i++) {
        cb(array[i]); // Ejecuta el callback con el elemento actual
    }
}

// Llamar a forEach
forEach(array, cb);
