(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  var firstLetter;
  for (var nombre in names) {
    firstLetter = names[nombre].charAt(0).toLowerCase();
    if (firstLetter == 'j') {

      valor2.metodo.speak(names[nombre]);
    } else {
      valor.metodo.speak(names[nombre]);
    }
  }
})()