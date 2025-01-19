
var nombre = 'Michi';
var edad = 8;
function crearGato(nombre, edad) {
    // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
    // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
    // Además, agregar una propiedad con el nombre "meow".
    // La propiedad "meow" será una función que 
    // retorne el string: "Meow!".
    // Retornar el objeto.
    // Tu código:
    var gato={};

    gato.nombre = nombre;
    gato.edad = edad;
    gato.meow = function(){
        return 'Meow!';
    };

    return gato;

    

}
console.log(crearGato(nombre, edad));