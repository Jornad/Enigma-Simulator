var rot1 = document.getElementById('rotor1');
var rot2 = document.getElementById('rotor2');
var rot3 = document.getElementById('rotor3');
var loadData = document.getElementById('loadSettings');

var rot1Pos = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var rot2Pos = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var rot3Pos = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var plugs = {
  A: "A",B: "B",C: "C",D: "D",E: "E",F: "F",G: "G",H: "H",I: "I",J: "J",K: "K",L: "L",M: "M",
  N: "N",O: "O",P: "P",Q: "Q",R: "R",S: "S",T: "T",U: "U",V: "V",W: "W",X: "X",Y: "Y",Z: "Z"
}

updateRotor();

function formatData() {
  var data = loadData.value.split(",");
  console.log(data);
  updateData(parseInt(data[0]), parseInt(data[1]), parseInt(data[2]), data[3]);
}

function updateData(rot1Dat, rot2Dat, rot3Dat, plugs) {
  for(rot1Dat >= 0; rot1Dat--;) {
    rot1Pos.unshift(rot1Pos.pop());
  }
  for(rot2Dat >= 0; rot2Dat--;) {
    rot2Pos.unshift(rot2Pos.pop());
  }
  for(rot3Dat >= 0; rot3Dat--;) {
    rot3Pos.unshift(rot3Pos.pop());
  }

  var plugOrder = plugs.split("");
  console.log(plugOrder);

  updateRotor();
  drawPlugs();
}

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

function drawPlugs() {

}
