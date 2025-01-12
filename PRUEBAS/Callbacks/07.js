var arrayOfStrings = [
  "acordeon",
  "guitarra",
  "flauta",
  "armonica",
  "bateria",
  "arpa",
];

function filter(arrayOfStrings) {
  var nuevoArreglo = [];

  for (var i = 0; i < arrayOfStrings.length; i++) {
    var indiceEn = arrayOfStrings[i].indexOf("a");
    if (indiceEn === 0) {
      nuevoArreglo.push(arrayOfStrings[i]);
    }
  }
  return nuevoArreglo;
}
console.log(filter(arrayOfStrings));
