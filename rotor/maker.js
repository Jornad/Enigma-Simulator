var data = document.getElementById('data');
var rotNum = document.getElementById('rotnum');
var output = document.getElementById('output');
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function format() {
  var numDat =[];
  var dat = data.value.split("");
  for (var i = 0; i < dat.length; i++) {
    numDat[i] = alphabet.indexOf(dat[i].toUpperCase()) + 1;
  }
}
