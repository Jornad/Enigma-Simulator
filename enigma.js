var rot1 = document.getElementById('rotor1');
var rot2 = document.getElementById('rotor2');
var rot3 = document.getElementById('rotor3');
var loadData = document.getElementById('loadSettings');
var lampLetA = document.getElementById('lightLetA');
var lampLetB = document.getElementById('lightLetB');
var lampLetC = document.getElementById('lightLetC');
var lampLetD = document.getElementById('lightLetD');
var lampLetE = document.getElementById('lightLetE');
var lampLetF = document.getElementById('lightLetF');
var lampLetG = document.getElementById('lightLetG');
var lampLetH = document.getElementById('lightLetH');
var lampLetI = document.getElementById('lightLetI');
var lampLetJ = document.getElementById('lightLetJ');
var lampLetK = document.getElementById('lightLetK');
var lampLetL = document.getElementById('lightLetL');
var lampLetM = document.getElementById('lightLetM');
var lampLetN = document.getElementById('lightLetN');
var lampLetO = document.getElementById('lightLetO');
var lampLetP = document.getElementById('lightLetP');
var lampLetQ = document.getElementById('lightLetQ');
var lampLetR = document.getElementById('lightLetR');
var lampLetS = document.getElementById('lightLetS');
var lampLetT = document.getElementById('lightLetT');
var lampLetU = document.getElementById('lightLetU');
var lampLetV = document.getElementById('lightLetV');
var lampLetW = document.getElementById('lightLetW');
var lampLetX = document.getElementById('lightLetX');
var lampLetY = document.getElementById('lightLetY');
var lampLetZ = document.getElementById('lightLetZ');

var rot1Pos = ["Z", "Y", "X", "W", "V", "U", "T", "S", "R", "Q", "P", "O", "N", "M", "L", "K", "J", "I", "H", "G", "F", "E", "D", "C", "B", "A"];
var rot2Pos = ["Z", "Y", "X", "W", "V", "U", "T", "S", "R", "Q", "P", "O", "N", "M", "L", "K", "J", "I", "H", "G", "F", "E", "D", "C", "B", "A"];
var rot3Pos = ["Z", "Y", "X", "W", "V", "U", "T", "S", "R", "Q", "P", "O", "N", "M", "L", "K", "J", "I", "H", "G", "F", "E", "D", "C", "B", "A"];

var plugs = {
  A: "A",B: "B",C: "C",D: "D",E: "E",F: "F",G: "G",H: "H",I: "I",J: "J",K: "K",L: "L",M: "M",
  N: "N",O: "O",P: "P",Q: "Q",R: "R",S: "S",T: "T",U: "U",V: "V",W: "W",X: "X",Y: "Y",Z: "Z"
}

updateRotor();

document.addEventListener('keydown', function(e) {
  lightOn(e.key.toUpperCase());
});

document.addEventListener('keyup', function(e) {
  spinRotor(1);
  lightOff(e.key.toUpperCase());
});

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
    if(rot3Pos[rot3Pos.length - 1] == "Z") {
      rot2Pos.unshift(rot2Pos.pop());
      if(rot2Pos[rot2Pos.length - 1] == "Z") {
        rot1Pos.unshift(rot1Pos.pop());
      }
    }
  }
  updateRotor();
}

function drawPlugs() {

}

function lightOn(lamp) {
  switch(lamp) {
    case "A":
    lightLetA.style.background = "yellow";
    break;
    case "B":
    lightLetB.style.background = "yellow";
    break;
    case "C":
    lightLetC.style.background = "yellow";
    break;
    case "D":
    lightLetD.style.background = "yellow";
    break;
    case "E":
    lightLetE.style.background = "yellow";
    break;
    case "F":
    lightLetF.style.background = "yellow";
    break;
    case "G":
    lightLetG.style.background = "yellow";
    break;
    case "H":
    lightLetH.style.background = "yellow";
    break;
    case "I":
    lightLetI.style.background = "yellow";
    break;
    case "J":
    lightLetJ.style.background = "yellow";
    break;
    case "K":
    lightLetK.style.background = "yellow";
    break;
    case "L":
    lightLetL.style.background = "yellow";
    break;
    case "M":
    lightLetM.style.background = "yellow";
    break;
    case "N":
    lightLetN.style.background = "yellow";
    break;
    case "O":
    lightLetO.style.background = "yellow";
    break;
    case "P":
    lightLetP.style.background = "yellow";
    break;
    case "Q":
    lightLetQ.style.background = "yellow";
    break;
    case "R":
    lightLetR.style.background = "yellow";
    break;
    case "S":
    lightLetS.style.background = "yellow";
    break;
    case "T":
    lightLetT.style.background = "yellow";
    break;
    case "U":
    lightLetU.style.background = "yellow";
    break;
    case "V":
    lightLetV.style.background = "yellow";
    break;
    case "W":
    lightLetW.style.background = "yellow";
    break;
    case "X":
    lightLetX.style.background = "yellow";
    break;
    case "Y":
    lightLetY.style.background = "yellow";
    break;
    case "Z":
    lightLetZ.style.background = "yellow";
    break;
  }
}

function lightOff(lamp) {
  switch(lamp) {
    case "A":
    lightLetA.style.background = "rgba(0,0,0,0)";
    break;
    case "B":
    lightLetB.style.background = "rgba(0,0,0,0)";
    break;
    case "C":
    lightLetC.style.background = "rgba(0,0,0,0)";
    break;
    case "D":
    lightLetD.style.background = "rgba(0,0,0,0)";
    break;
    case "E":
    lightLetE.style.background = "rgba(0,0,0,0)";
    break;
    case "F":
    lightLetF.style.background = "rgba(0,0,0,0)";
    break;
    case "G":
    lightLetG.style.background = "rgba(0,0,0,0)";
    break;
    case "H":
    lightLetH.style.background = "rgba(0,0,0,0)";
    break;
    case "I":
    lightLetI.style.background = "rgba(0,0,0,0)";
    break;
    case "J":
    lightLetJ.style.background = "rgba(0,0,0,0)";
    break;
    case "K":
    lightLetK.style.background = "rgba(0,0,0,0)";
    break;
    case "L":
    lightLetL.style.background = "rgba(0,0,0,0)";
    break;
    case "M":
    lightLetM.style.background = "rgba(0,0,0,0)";
    break;
    case "N":
    lightLetN.style.background = "rgba(0,0,0,0)";
    break;
    case "O":
    lightLetO.style.background = "rgba(0,0,0,0)";
    break;
    case "P":
    lightLetP.style.background = "rgba(0,0,0,0)";
    break;
    case "Q":
    lightLetQ.style.background = "rgba(0,0,0,0)";
    break;
    case "R":
    lightLetR.style.background = "rgba(0,0,0,0)";
    break;
    case "S":
    lightLetS.style.background = "rgba(0,0,0,0)";
    break;
    case "T":
    lightLetT.style.background = "rgba(0,0,0,0)";
    break;
    case "U":
    lightLetU.style.background = "rgba(0,0,0,0)";
    break;
    case "V":
    lightLetV.style.background = "rgba(0,0,0,0)";
    break;
    case "W":
    lightLetW.style.background = "rgba(0,0,0,0)";
    break;
    case "X":
    lightLetX.style.background = "rgba(0,0,0,0)";
    break;
    case "Y":
    lightLetY.style.background = "rgba(0,0,0,0)";
    break;
    case "Z":
    lightLetZ.style.background = "rgba(0,0,0,0)";
    break;
  }
}
