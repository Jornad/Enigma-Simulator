var rot1 = document.getElementById('rotor1');
var rot2 = document.getElementById('rotor2');
var rot3 = document.getElementById('rotor3');

var rot1Pos = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var rot2Pos = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var rot3Pos = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

updateRotor();

function updateRotor() {
  var newline = "\r\n";

  var rot3Text = rot3Pos[25] + newline + rot3Pos[0] + newline + rot3Pos[1]
  rotor3.textContent = rot3Text;

  var rot2Text = rot2Pos[25] + newline + rot2Pos[0] + newline + rot2Pos[1]
  rotor2.textContent = rot2Text;

  var rot1Text = rot1Pos[25] + newline + rot1Pos[0] + newline + rot1Pos[1]
  rotor1.textContent = rot1Text;
}

function spinRotor(num) {
  for(num >= 0; num--;) {
    rot3Pos.unshift(rot3Pos.pop());
    if(rot3[25] == "Z") {
      rot2Pos.unshift(rot2Pos.pop());
    }
    if(rot2[25] == "Z") {
      rot1Pos.unshift(rot1Pos.pop());
    }
  }
  updateRotor();
}
