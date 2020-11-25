var valor2 = {};
(function () {
  var byeSpeaker = {};
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }
  var speakWord = "Good Bye";
  valor2.metodo = byeSpeaker;
})()
