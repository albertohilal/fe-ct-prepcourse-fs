function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  var nuevoTexto= "";
  if(texto.length === 0){
    return "";
  };

    for( var i = texto.length-1; i>=0; i--){
        nuevoTexto +=(texto[i]);

        
    }
    return nuevoTexto;
  };

module.exports = invertirTexto;
