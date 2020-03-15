var rot1 = document.getElementById('rotor1');
var rot2 = document.getElementById('rotor2');
var rot3 = document.getElementById('rotor3');

var loadMsg = document.getElementById('loadMessage');

var canvas = document.getElementById('plugs');
var ctx = canvas.getContext('2d');

var lampLets = {};
for(var i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) lampLets[String.fromCharCode(i)] = document.getElementById('lightLet'+String.fromCharCode(i));
console.log(lampLets);

var rot1Pos = ["Z", "Y", "X", "W", "V", "U", "T", "S", "R", "Q", "P", "O", "N", "M", "L", "K", "J", "I", "H", "G", "F", "E", "D", "C", "B", "A"];
var rot2Pos = ["Z", "Y", "X", "W", "V", "U", "T", "S", "R", "Q", "P", "O", "N", "M", "L", "K", "J", "I", "H", "G", "F", "E", "D", "C", "B", "A"];
var rot3Pos = ["Z", "Y", "X", "W", "V", "U", "T", "S", "R", "Q", "P", "O", "N", "M", "L", "K", "J", "I", "H", "G", "F", "E", "D", "C", "B", "A"];

var rot1Map = {
  A: "D",B: "M",C: "T",D: "W",E: "S",F: "I",G: "L",L: "R",I: "U",J: "Y",K: "Q",L: "N",M: "K",
  N: "F",O: "E",P: "J",Q: "C",R: "A",S: "Z",T: "B",U: "P",V: "G",W: "X",X: "O",Y: "H",Z: "V"
};
var rot2Map = {
  A: "H",B: "Q",C: "Z",D: "G",E: "P",F: "J",G: "T",H: "M",I: "O",J: "B",K: "L",L: "N",M: "C",
  N: "I",O: "F",P: "D",Q: "Y",R: "A",S: "W",T: "V",U: "E",V: "U",W: "S",X: "R",Y: "K",Z: "X"
};
var rot3Map = {
  A: "U",B: "Q",C: "N",D: "T",E: "L",F: "S",G: "Z",H: "F",I: "M",J: "R",K: "E",L: "H",M: "D",
  N: "P",O: "X",P: "K",Q: "I",R: "B",S: "V",T: "Y",U: "G",V: "J",W: "C",X: "W",Y: "O",Z: "A"
};
var reflectorMap = {
  A: "E",B: "J",C: "M",D: "Z",E: "A",F: "L",G: "Y",H: "X",I: "V",J: "B",K: "W",L: "F",M: "C",
  N: "R",O: "Q",P: "U",Q: "O",R: "N",S: "T",T: "S",U: "P",V: "I",W: "K",X: "H",Y: "G",Z: "D"
};

var plugs = {
  A: "A",B: "B",C: "C",D: "D",E: "E",F: "F",G: "G",H: "H",I: "I",J: "J",K: "K",L: "L",M: "M",
  N: "N",O: "O",P: "P",Q: "Q",R: "R",S: "S",T: "T",U: "U",V: "V",W: "W",X: "X",Y: "Y",Z: "Z"
};

canvas.width = 800;
canvas.height = 300;
ctx.fillStyle = "#444444";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "#444444";
ctx.lineWidth=10;
ctx.rect(0, 0, canvas.width, canvas.height);
ctx.stroke();

updateRotor();

rot3.addEventListener("click", function(e) {
  spinRotor(1);
});

rot2.addEventListener("click", function(e) {
  spinRotor(26);
});

rot1.addEventListener("click", function(e) {
  spinRotor(676);
});

document.addEventListener('keydown', function(e) {
  if(e.target.nodeName == "INPUT") return;
  crypt(e.key.toUpperCase());
});

document.addEventListener('keyup', function(e) {
  if(e.target.nodeName == "INPUT") return;
  if(rot1Pos.includes(e.key.toUpperCase())) {
    spinRotor(1);
    lightOff(e.key.toUpperCase());
  }
});

function fetchFromObject(obj, prop) {
    if(typeof obj === 'undefined') {
        return false;
    }
    var _index = prop.indexOf('.')
    if(_index > -1) {
        return fetchFromObject(obj[prop.substring(0, _index)], prop.substr(_index + 1));
    }
    return obj[prop];
}

function crypt(letter) {

}

function formatData() {
  rot1Pos = ["Z", "Y", "X", "W", "V", "U", "T", "S", "R", "Q", "P", "O", "N", "M", "L", "K", "J", "I", "H", "G", "F", "E", "D", "C", "B", "A"];
  rot2Pos = ["Z", "Y", "X", "W", "V", "U", "T", "S", "R", "Q", "P", "O", "N", "M", "L", "K", "J", "I", "H", "G", "F", "E", "D", "C", "B", "A"];
  rot3Pos = ["Z", "Y", "X", "W", "V", "U", "T", "S", "R", "Q", "P", "O", "N", "M", "L", "K", "J", "I", "H", "G", "F", "E", "D", "C", "B", "A"];
  if (loadData.value.length >= 32 && loadData.value.length <= 35) {
    var data = loadData.value.split(",");
    updateData(parseInt(data[0]), parseInt(data[1]), parseInt(data[2]), data[3]);
  } else {
    loadMsg.textContent = "Error loading data: Invalid format";
    return;
  }
}

function updateData(rot1Dat, rot2Dat, rot3Dat, plugDat) {
  for(rot1Dat >= 0; rot1Dat--;) {
    rot1Pos.unshift(rot1Pos.pop());
  }
  for(rot2Dat >= 0; rot2Dat--;) {
    rot2Pos.unshift(rot2Pos.pop());
  }
  for(rot3Dat >= 0; rot3Dat--;) {
    rot3Pos.unshift(rot3Pos.pop());
  }

  var plugOrder = plugDat.split("");
  plugs.A = plugOrder[0];
  plugs.B = plugOrder[1];
  plugs.C = plugOrder[2];
  plugs.D = plugOrder[3];
  plugs.E = plugOrder[4];
  plugs.F = plugOrder[5];
  plugs.G = plugOrder[6];
  plugs.H = plugOrder[7];
  plugs.I = plugOrder[8];
  plugs.J = plugOrder[9];
  plugs.K = plugOrder[10];
  plugs.L = plugOrder[11];
  plugs.M = plugOrder[12];
  plugs.N = plugOrder[13];
  plugs.O = plugOrder[14];
  plugs.P = plugOrder[15];
  plugs.Q = plugOrder[16];
  plugs.R = plugOrder[17];
  plugs.S = plugOrder[18];
  plugs.T = plugOrder[19];
  plugs.U = plugOrder[20];
  plugs.V = plugOrder[21];
  plugs.W = plugOrder[22];
  plugs.X = plugOrder[23];
  plugs.Y = plugOrder[24];
  plugs.Z = plugOrder[25];

  updateRotor();
  drawPlugs();
  loadMsg.textContent = "Successfully loaded data!";
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
    if(rot3Pos[0] == "R") {
      rot2Pos.unshift(rot2Pos.pop());
      if(rot2Pos[0] == "F") {
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
