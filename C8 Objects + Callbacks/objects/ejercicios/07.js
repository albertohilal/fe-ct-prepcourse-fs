function sort(sortBy, list) {
   // La función sort recibe dos parámetros:
   // sortBy: una letra (string).
   // list: un arreglo de objetos.
   // La función deberá devolver la lista de objetos ordenada de forma DESCENDIENTE
   // a partir de la letra recibida. Por ejemplo:
   // recibes --> ("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }])
   // retorna --> [{ a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }]
   // Tu código:
   return list.sort((obj1, obj2) => {
      // Comparar los valores de la propiedad "sortBy" de obj1 y obj2
      if (obj1[sortBy] < obj2[sortBy]) return 1; // Si obj1[sortBy] es menor, obj2 va antes
      if (obj1[sortBy] > obj2[sortBy]) return -1; // Si obj1[sortBy] es mayor, obj1 va antes
      return 0; // Si son iguales, no cambia el orden
    });
   }


module.exports = sort;
