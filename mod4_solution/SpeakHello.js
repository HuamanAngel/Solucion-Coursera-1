var valor = {};
(function () {
  var helloSpeaker = {};
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  var speakWord = "Hello";

  valor.metodo = helloSpeaker;
})()
