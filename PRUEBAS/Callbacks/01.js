function cb(){
    return "Hola!";
}

function invocarCallback(cb) {
    // Invoca/ejecuta el callback `cb`.
    // NOTA: no debes retornar nada.
    // Tu código:
    console.log(cb()); // Ejecuta el callback y muestra el resultado
 }

 invocarCallback(cb);