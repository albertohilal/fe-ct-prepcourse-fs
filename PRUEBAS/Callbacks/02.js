function callback(texto){
    var nuevoTexto= "";
  if(texto.length === 0){
    return "";
  };

    for( var i = texto.length-1; i>=0; i--){
        nuevoTexto +=(texto[i]);


}
return nuevoTexto; // Debes retornar el texto invertido
};

var string = "El amor vence";
function cambiarCadena(string, callback) {
    // Aplica la función de callback al string y 
    // devuelve el resultado.
    // La función de callback se encargará de 
    // recibir el string y devolverlo con los cambios.
    // Si no se recibe una función callback entonces 
    // se debe retornar el string original.
    // Tu código:
    if (typeof callback !== "function") {
        return string;
    }else{
        var nuevoString = callback(string);
    return nuevoString;
    }
    

 };
 console.log(cambiarCadena(string, callback));