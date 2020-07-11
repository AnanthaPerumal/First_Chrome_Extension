document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('sayHi');
  button.addEventListener('click', function() {
    var a = prompt("Tell me your name master!","master");
    alert("Hello "+a+"\nHave a good day!");
  }, false);
}, false);