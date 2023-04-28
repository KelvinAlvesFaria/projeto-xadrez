let listaPecas = [
  "torrePreta1",
  "torrePreta2",
  "cavaloPreto1",
  "cavaloPreto2",
  "bispoPreto1",
  "bispoPreto2",
  "rainhaPreta",
  "reiPreto",
  "peaoPreto1",
  "peaoPreto2",
  "peaoPreto3",
  "peaoPreto4",
  "peaoPreto5",
  "peaoPreto6",
  "peaoPreto7",
  "peaoPreto8",
  "torreBranca",
  "cavaloBranco1",
  "cavaloBranco2",
  "bispoBranco1",
  "bispoBranco2",
  "reiBranco",
  "rainhaBranca",
  "peaoBranco1",
  "peaoBranco2",
  "peaoBranco3",
  "peaoBranco4",
  "peaoBranco5",
  "peaoBranco6",
  "peaoBranco7",
  "peaoBranco8",
];

let listaPecasBrancas = [
  "torreBranca1",
  "torreBranca2",
  "cavaloBranco1",
  "cavaloBranco2",
  "bispoBranco1",
  "bispoBranco2",
  "reiBranco",
  "rainhaBranca",
  "peaoBranco1",
  "peaoBranco2",
  "peaoBranco3",
  "peaoBranco4",
  "peaoBranco5",
  "peaoBranco6",
  "peaoBranco7",
  "peaoBranco8",
];

let imagensPecasBrancas = [
  "images/torre-branca.png",
  "images/cavalo-branco.png",
  "images/bispo-branco.png",
  "images/rainha-branca.png",
  "images/rei-branco.png",
  "images/peao-branco.png",
];

let listaTorresBrancas = ["torreBranca1", "torreBranca2"];

let listaCavalosBrancos = ["cavaloBranco1", "cavaloBranco2"];

let listaBisposBrancos = ["bispoBranco1", "bispoBranco2"];

let listaPeoesBrancos = [
  "peaoBranco1",
  "peaoBranco2",
  "peaoBranco3",
  "peaoBranco4",
  "peaoBranco5",
  "peaoBranco6",
  "peaoBranco7",
  "peaoBranco8",
];

let listaPecasPretas = [
  "torrePreta1",
  "torrePreta2",
  "cavaloPreto1",
  "cavaloPreto2",
  "bispoPreto1",
  "bispoPreto2",
  "rainhaPreta",
  "reiPreto",
  "peaoPreto1",
  "peaoPreto2",
  "peaoPreto3",
  "peaoPreto4",
  "peaoPreto5",
  "peaoPreto6",
  "peaoPreto7",
  "peaoPreto8",
];

let imagensPecasPretas = [
  "images/torre-preta.png",
  "images/cavalo-preto.png",
  "images/bispo-preto.png",
  "images/rainha-preta.png",
  "images/rei-preto.png",
  "images/peao-preto.png",
];

let listaTorresPretas = ["torrePreta1", "torrePreta2"];

let listaCavalosPretos = ["cavaloPreto1", "cavaloPreto2"];

let listaBisposPretos = ["bispoPreto1", "bispoPreto2"];

let listaPeoesPretos = [
  "peaoPreto1",
  "peaoPreto2",
  "peaoPreto3",
  "peaoPreto4",
  "peaoPreto5",
  "peaoPreto6",
  "peaoPreto7",
  "peaoPreto8",
];

let listaVazia = [
  "A6",
  "A5",
  "A4",
  "A3",
  "B6",
  "B5",
  "B4",
  "B3",
  "C6",
  "C5",
  "C4",
  "C3",
  "D6",
  "D5",
  "D4",
  "D3",
  "E6",
  "E5",
  "E4",
  "E3",
  "F6",
  "F5",
  "F4",
  "F3",
  "G6",
  "G5",
  "G4",
  "G3",
  "H6",
  "H5",
  "H4",
  "H3",
];

let listaPromocaoBrancas = ["A8", "B8", "C8", "D8", "E8", "F8", "G8", "H8"];

let listaPromocaoPretas = ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1"];

let listaAmeacasBrancas = [];
let listaAmeacasPretas = [];

let turnoBrancas = 1;
let turnoPretas = 0;

let selecionouPeca = 0;
let pecaSelecionada = {};

let ultimaPecaQueAgiu = {};

var matriz = new Array(8);

for (var i = 0; i < matriz.length; i++) {
  matriz[i] = new Array(8);
}

const botaoVitoriaDasBrancas = document.querySelector("#botaoVitoriaDasBrancas");
botaoVitoriaDasBrancas.addEventListener("click", reiniciar);
const botaoVitoriaDasPretas = document.querySelector("#botaoVitoriaDasPretas");
botaoVitoriaDasPretas.addEventListener("click", reiniciar);
const menuPromocaoBranca = document.querySelector("#promocaoPecasBrancas");
const menuPromocaoPreta = document.querySelector("#promocaoPecasPretas");
const botaoRainhaBranca = document.querySelector("#botaoRainhaBranca");
botaoRainhaBranca.addEventListener("click", peaoParaRainhaBranca);
const botaoBispoBranco = document.querySelector("#botaoBispoBranco");
botaoBispoBranco.addEventListener("click", peaoParaBispoBranco);
const botaoTorreBranca = document.querySelector("#botaoTorreBranca");
botaoTorreBranca.addEventListener("click", peaoParaTorreBranca);
const botaoCavaloBranco = document.querySelector("#botaoCavaloBranco");
botaoCavaloBranco.addEventListener("click", peaoParaCavaloBranco);
const botaoRainhaPreta = document.querySelector("#botaoRainhaPreta");
botaoRainhaPreta.addEventListener("click", peaoParaRainhaPreta);
const botaoBispoPreto = document.querySelector("#botaoBispoPreto");
botaoBispoPreto.addEventListener("click", peaoParaBispoPreto);
const botaoTorrePreta = document.querySelector("#botaoTorrePreta");
botaoTorrePreta.addEventListener("click", peaoParaTorrePreta);
const botaoCavaloPreto = document.querySelector("#botaoCavaloPreto");
botaoCavaloPreto.addEventListener("click", peaoParaCavaloPreto);

function reiniciar(){
  location.reload();
  /*
  let turnoP = document.getElementById("turnoP");
  let turno = document.getElementById("turno");
  if (turnoBrancas == 0) {
    turnoP.innerText = "Brancas";
    turnoP.style.color = "white";
    turno.style.backgroundColor = "white";
    turnoP.style.textShadow =
      "-1px -2px #000, 1px -2px #000, -1px 2px #000, 1px 2px #000";
  }
  for (let j = 0; j < numeros.length; j++) {
    for (let i = 0; i < letras.length; i++) {
      matriz[j][i] = {};
      let quadrado = document.getElementById(letras[i] + numeros[j]);
      if (quadrado.innerHTML.indexOf("<img") !== -1) {
        let imagem = quadrado.getElementsByTagName("img")[0];
        quadrado.removeChild(imagem);
      }
    }
  }
  turnoBrancas = 1;
  turnoPretas = 0;
  listaAmeacasBrancas = [];
  listaAmeacasPretas = [];
  selecionouPeca = 0;
  pecaSelecionada = {};
  ultimaPecaQueAgiu = {};

  distribuirPecas();

  // FAZER POR AQUI O RESET DAS IMAGENS DA PEÇAS

  quadrado = document.getElementById("vitoriaDasBrancas");
  quadrado.style.display = "none";
  quadrado = document.getElementById("vitoriaDasPretas");
  quadrado.style.display = "none";
  atualizarAmeacas();
  */
}

function peaoParaRainhaBranca() {
  let divImagem; // Define a variável antes do loop
  for (let i = 0; i < 8; i++) {
    if (listaPeoesBrancos.includes(matriz[0][i].nome)) {
      matriz[0][i].nome = "rainhaBranca";
      matriz[0][i].movimento = [];
      divImagem = document.getElementById(letras[i] + 8);
      break;
    }
  }
  let novaImagem = document.createElement("img");
  novaImagem.src = "images/rainha-branca.png";
  let imagemAntiga = divImagem.getElementsByTagName("img")[0];
  divImagem.removeChild(imagemAntiga);
  divImagem.appendChild(novaImagem);

  promocaoPecasBrancas.style.display = "none";
  verificarXequeMate();
  selecionouPeca = 0;
}

function peaoParaBispoBranco() {
  let divImagem; // Define a variável antes do loop
  for (let i = 0; i < 8; i++) {
    if (listaPeoesBrancos.includes(matriz[0][i].nome)) {
      matriz[0][i].nome = "bispoBranco1";
      matriz[0][i].movimento = [];
      divImagem = document.getElementById(letras[i] + 8);
      break;
    }
  }
  let novaImagem = document.createElement("img");
  novaImagem.src = "images/bispo-branco.png";
  let imagemAntiga = divImagem.getElementsByTagName("img")[0];
  divImagem.removeChild(imagemAntiga);
  divImagem.appendChild(novaImagem);

  promocaoPecasBrancas.style.display = "none";
  verificarXequeMate();
  selecionouPeca = 0;
}

function peaoParaTorreBranca() {
  let divImagem; // Define a variável antes do loop
  for (let i = 0; i < 8; i++) {
    if (listaPeoesBrancos.includes(matriz[0][i].nome)) {
      matriz[0][i].nome = "torreBranca1";
      matriz[0][i].movimento = [];
      divImagem = document.getElementById(letras[i] + 8);
      break;
    }
  }
  let novaImagem = document.createElement("img");
  novaImagem.src = "images/torre-branca.png";
  let imagemAntiga = divImagem.getElementsByTagName("img")[0];
  divImagem.removeChild(imagemAntiga);
  divImagem.appendChild(novaImagem);

  promocaoPecasBrancas.style.display = "none";
  verificarXequeMate();
  selecionouPeca = 0;
}

function peaoParaCavaloBranco() {
  let divImagem; // Define a variável antes do loop
  for (let i = 0; i < 8; i++) {
    if (listaPeoesBrancos.includes(matriz[0][i].nome)) {
      matriz[0][i].nome = "cavaloBranco1";
      matriz[0][i].movimento = [];
      divImagem = document.getElementById(letras[i] + 8);
      break;
    }
  }
  let novaImagem = document.createElement("img");
  novaImagem.src = "images/cavalo-branco.png";
  let imagemAntiga = divImagem.getElementsByTagName("img")[0];
  divImagem.removeChild(imagemAntiga);
  divImagem.appendChild(novaImagem);

  promocaoPecasBrancas.style.display = "none";
  verificarXequeMate();
  selecionouPeca = 0;
}

function peaoParaRainhaPreta() {
  let divImagem; // Define a variável antes do loop
  for (let i = 0; i < 8; i++) {
    if (listaPeoesPretos.includes(matriz[7][i].nome)) {
      matriz[7][i].nome = "rainhaPreta";
      matriz[7][i].movimento = [];
      divImagem = document.getElementById(letras[i] + 1);
      break;
    }
  }
  let novaImagem = document.createElement("img");
  novaImagem.src = "images/rainha-preta.png";
  let imagemAntiga = divImagem.getElementsByTagName("img")[0];
  divImagem.removeChild(imagemAntiga);
  divImagem.appendChild(novaImagem);

  promocaoPecasPretas.style.display = "none";
  verificarXequeMate();
  selecionouPeca = 0;
}

function peaoParaBispoPreto() {
  let divImagem; // Define a variável antes do loop
  for (let i = 0; i < 8; i++) {
    if (listaPeoesPretos.includes(matriz[7][i].nome)) {
      matriz[7][i].nome = "bispoPreto1";
      matriz[7][i].movimento = [];
      divImagem = document.getElementById(letras[i] + 1);
      break;
    }
  }
  let novaImagem = document.createElement("img");
  novaImagem.src = "images/bispo-preto.png";
  let imagemAntiga = divImagem.getElementsByTagName("img")[0];
  divImagem.removeChild(imagemAntiga);
  divImagem.appendChild(novaImagem);

  promocaoPecasPretas.style.display = "none";
  verificarXequeMate();
  selecionouPeca = 0;
}

function peaoParaTorrePreta() {
  let divImagem; // Define a variável antes do loop
  for (let i = 0; i < 8; i++) {
    if (listaPeoesPretos.includes(matriz[7][i].nome)) {
      matriz[7][i].nome = "torrePreta1";
      matriz[7][i].movimento = [];
      divImagem = document.getElementById(letras[i] + 1);
      break;
    }
  }
  let novaImagem = document.createElement("img");
  novaImagem.src = "images/torre-preta.png";
  let imagemAntiga = divImagem.getElementsByTagName("img")[0];
  divImagem.removeChild(imagemAntiga);
  divImagem.appendChild(novaImagem);

  promocaoPecasPretas.style.display = "none";
  verificarXequeMate();
  selecionouPeca = 0;
}

function peaoParaCavaloPreto() {
  let divImagem; // Define a variável antes do loop
  for (let i = 0; i < 8; i++) {
    if (listaPeoesPretos.includes(matriz[7][i].nome)) {
      matriz[7][i].nome = "cavaloPreto1";
      matriz[7][i].movimento = [];
      divImagem = document.getElementById(letras[i] + 1);
      break;
    }
  }
  let novaImagem = document.createElement("img");
  novaImagem.src = "images/cavalo-preto.png";
  let imagemAntiga = divImagem.getElementsByTagName("img")[0];
  divImagem.removeChild(imagemAntiga);
  divImagem.appendChild(novaImagem);

  promocaoPecasPretas.style.display = "none";
  verificarXequeMate();
  selecionouPeca = 0;
}

function letraParaNumero(letra) {
  if (letra == "a" || letra == "A") {
    letra = "1";
  }
  if (letra == "b" || letra == "B") {
    letra = "2";
  }
  if (letra == "c" || letra == "C") {
    letra = "3";
  }
  if (letra == "d" || letra == "D") {
    letra = "4";
  }
  if (letra == "e" || letra == "E") {
    letra = "5";
  }
  if (letra == "f" || letra == "F") {
    letra = "6";
  }
  if (letra == "g" || letra == "G") {
    letra = "7";
  }
  if (letra == "h" || letra == "H") {
    letra = "8";
  }
  return letra;
}

function posicaoParaMatriz(letra, numero) {
  let i = letraParaNumero(letra);
  i = i - 1;
  let j = 8 - Number(numero);
  let matriz = [j, i];
  return matriz;
}

function ameacaPeoesBrancos(letra, numero, peca) {
  listaTemp = posicaoParaMatriz(letra, numero);
  let margem = [];
  if (matriz[listaTemp[0] - 1] && matriz[listaTemp[0] - 1][listaTemp[1] - 1]) {
    margem.push(matriz[listaTemp[0] - 1][listaTemp[1] - 1].posicao);
  }
  if (matriz[listaTemp[0] - 1] && matriz[listaTemp[0] - 1][listaTemp[1] + 1]) {
    margem.push(matriz[listaTemp[0] - 1][listaTemp[1] + 1].posicao);
  }
  peca.ameaca = margem;
}

function movimentoPeoesBrancos(letra, numero, peca) {
  listaTemp = posicaoParaMatriz(letra, numero);
  let margem = [];
  if (peca.contador == 0) {
    for (let i = 1; i < 3; i++) {
      if (listaTemp[0] - i < 0) {
        break;
      }
      if (listaPecas.includes(matriz[listaTemp[0] - i][listaTemp[1]]?.nome)) {
        break;
      }
      margem.push(matriz[listaTemp[0] - i][listaTemp[1]].posicao);
    }
  }
  if (peca.contador > 0) {
    if (
      listaTemp[0] - 1 >= 0 &&
      listaTemp[0] - 1 < matriz.length &&
      listaTemp[1] >= 0 &&
      listaTemp[1] < matriz[0].length &&
      !listaPecas.includes(matriz[listaTemp[0] - 1][listaTemp[1]]?.nome)
    ) {
      margem.push(matriz[listaTemp[0] - 1][listaTemp[1]].posicao);
    }
  }
  peca.movimento = margem;
}

function ameacaPeoesPretos(letra, numero, peca) {
  listaTemp = posicaoParaMatriz(letra, numero);
  let margem = [];
  if (matriz[listaTemp[0] + 1] && matriz[listaTemp[0] + 1][listaTemp[1] - 1]) {
    margem.push(matriz[listaTemp[0] + 1][listaTemp[1] - 1].posicao);
  }
  if (matriz[listaTemp[0] + 1] && matriz[listaTemp[0] + 1][listaTemp[1] + 1]) {
    margem.push(matriz[listaTemp[0] + 1][listaTemp[1] + 1].posicao);
  }
  peca.ameaca = margem;
}

function movimentoPeoesPretos(letra, numero, peca) {
  listaTemp = posicaoParaMatriz(letra, numero);
  let margem = [];
  if (peca.contador == 0) {
    for (let i = 1; i < 3; i++) {
      if (listaTemp[0] + i > 7) {
        break;
      }
      if (listaPecas.includes(matriz[listaTemp[0] + i][listaTemp[1]]?.nome)) {
        break;
      }
      margem.push(matriz[listaTemp[0] + i][listaTemp[1]].posicao);
    }
  }
  if (peca.contador > 0) {
    if (
      listaTemp[0] + 1 <= 7 &&
      listaTemp[0] + 1 < matriz.length &&
      listaTemp[1] <= 7 &&
      listaTemp[1] < matriz[0].length &&
      !listaPecas.includes(matriz[listaTemp[0] + 1][listaTemp[1]]?.nome)
    ) {
      margem.push(matriz[listaTemp[0] + 1][listaTemp[1]].posicao);
    }
  }
  peca.movimento = margem;
}

function ameacaCavalos(letra, numero, peca) {
  listaTemp = posicaoParaMatriz(letra, numero);
  let margem = [];
  if (listaPecasBrancas.includes(peca.nome)) {
    if (
      matriz[listaTemp[0] - 2] &&
      matriz[listaTemp[0] - 2][listaTemp[1] - 1]
    ) {
      margem.push(matriz[listaTemp[0] - 2][listaTemp[1] - 1].posicao);
    }
    if (
      matriz[listaTemp[0] - 2] &&
      matriz[listaTemp[0] - 2][listaTemp[1] + 1]
    ) {
      margem.push(matriz[listaTemp[0] - 2][listaTemp[1] + 1].posicao);
    }
    if (
      matriz[listaTemp[0] + 2] &&
      matriz[listaTemp[0] + 2][listaTemp[1] - 1]
    ) {
      margem.push(matriz[listaTemp[0] + 2][listaTemp[1] - 1].posicao);
    }
    if (
      matriz[listaTemp[0] + 2] &&
      matriz[listaTemp[0] + 2][listaTemp[1] + 1]
    ) {
      margem.push(matriz[listaTemp[0] + 2][listaTemp[1] + 1].posicao);
    }
    if (
      matriz[listaTemp[0] - 1] &&
      matriz[listaTemp[0] - 1][listaTemp[1] - 2]
    ) {
      margem.push(matriz[listaTemp[0] - 1][listaTemp[1] - 2].posicao);
    }
    if (
      matriz[listaTemp[0] - 1] &&
      matriz[listaTemp[0] - 1][listaTemp[1] + 2]
    ) {
      margem.push(matriz[listaTemp[0] - 1][listaTemp[1] + 2].posicao);
    }
    if (
      matriz[listaTemp[0] + 1] &&
      matriz[listaTemp[0] + 1][listaTemp[1] - 2]
    ) {
      margem.push(matriz[listaTemp[0] + 1][listaTemp[1] - 2].posicao);
    }
    if (
      matriz[listaTemp[0] + 1] &&
      matriz[listaTemp[0] + 1][listaTemp[1] + 2]
    ) {
      margem.push(matriz[listaTemp[0] + 1][listaTemp[1] + 2].posicao);
    }
  }
  if (listaPecasPretas.includes(peca.nome)) {
    if (
      matriz[listaTemp[0] - 2] &&
      matriz[listaTemp[0] - 2][listaTemp[1] - 1]
    ) {
      margem.push(matriz[listaTemp[0] - 2][listaTemp[1] - 1].posicao);
    }
    if (
      matriz[listaTemp[0] - 2] &&
      matriz[listaTemp[0] - 2][listaTemp[1] + 1]
    ) {
      margem.push(matriz[listaTemp[0] - 2][listaTemp[1] + 1].posicao);
    }
    if (
      matriz[listaTemp[0] + 2] &&
      matriz[listaTemp[0] + 2][listaTemp[1] - 1]
    ) {
      margem.push(matriz[listaTemp[0] + 2][listaTemp[1] - 1].posicao);
    }
    if (
      matriz[listaTemp[0] + 2] &&
      matriz[listaTemp[0] + 2][listaTemp[1] + 1]
    ) {
      margem.push(matriz[listaTemp[0] + 2][listaTemp[1] + 1].posicao);
    }
    if (
      matriz[listaTemp[0] - 1] &&
      matriz[listaTemp[0] - 1][listaTemp[1] - 2]
    ) {
      margem.push(matriz[listaTemp[0] - 1][listaTemp[1] - 2].posicao);
    }
    if (
      matriz[listaTemp[0] - 1] &&
      matriz[listaTemp[0] - 1][listaTemp[1] + 2]
    ) {
      margem.push(matriz[listaTemp[0] - 1][listaTemp[1] + 2].posicao);
    }
    if (
      matriz[listaTemp[0] + 1] &&
      matriz[listaTemp[0] + 1][listaTemp[1] - 2]
    ) {
      margem.push(matriz[listaTemp[0] + 1][listaTemp[1] - 2].posicao);
    }
    if (
      matriz[listaTemp[0] + 1] &&
      matriz[listaTemp[0] + 1][listaTemp[1] + 2]
    ) {
      margem.push(matriz[listaTemp[0] + 1][listaTemp[1] + 2].posicao);
    }
  }
  peca.ameaca = margem;
}

function ameacaBispos(letra, numero, peca) {
  listaTemp = posicaoParaMatriz(letra, numero);
  let margem = [];
  for (let i = 1; i < 8; i++) {
    if (
      matriz[listaTemp[0] + i] &&
      matriz[listaTemp[0] + i][listaTemp[1] + i] &&
      matriz[listaTemp[0] + i][listaTemp[1] + i].nome == "vazio"
    ) {
      margem.push(matriz[listaTemp[0] + i][listaTemp[1] + i].posicao);
    }
    if (
      matriz[listaTemp[0] + i] &&
      matriz[listaTemp[0] + i][listaTemp[1] + i] &&
      matriz[listaTemp[0] + i][listaTemp[1] + i].nome != "vazio"
    ) {
      margem.push(matriz[listaTemp[0] + i][listaTemp[1] + i].posicao);
      break;
    }
  }
  for (let i = 1; i < 8; i++) {
    if (
      matriz[listaTemp[0] - i] &&
      matriz[listaTemp[0] - i][listaTemp[1] + i] &&
      matriz[listaTemp[0] - i][listaTemp[1] + i].nome == "vazio"
    ) {
      margem.push(matriz[listaTemp[0] - i][listaTemp[1] + i].posicao);
    }
    if (
      matriz[listaTemp[0] - i] &&
      matriz[listaTemp[0] - i][listaTemp[1] + i] &&
      matriz[listaTemp[0] - i][listaTemp[1] + i].nome != "vazio"
    ) {
      margem.push(matriz[listaTemp[0] - i][listaTemp[1] + i].posicao);
      break;
    }
  }
  for (let i = 1; i < 8; i++) {
    if (
      matriz[listaTemp[0] + i] &&
      matriz[listaTemp[0] + i][listaTemp[1] - i] &&
      matriz[listaTemp[0] + i][listaTemp[1] - i].nome == "vazio"
    ) {
      margem.push(matriz[listaTemp[0] + i][listaTemp[1] - i].posicao);
    }
    if (
      matriz[listaTemp[0] + i] &&
      matriz[listaTemp[0] + i][listaTemp[1] - i] &&
      matriz[listaTemp[0] + i][listaTemp[1] - i].nome != "vazio"
    ) {
      margem.push(matriz[listaTemp[0] + i][listaTemp[1] - i].posicao);
      break;
    }
  }
  for (let i = 1; i < 8; i++) {
    if (
      matriz[listaTemp[0] - i] &&
      matriz[listaTemp[0] - i][listaTemp[1] - i] &&
      matriz[listaTemp[0] - i][listaTemp[1] - i].nome == "vazio"
    ) {
      margem.push(matriz[listaTemp[0] - i][listaTemp[1] - i].posicao);
    }
    if (
      matriz[listaTemp[0] - i] &&
      matriz[listaTemp[0] - i][listaTemp[1] - i] &&
      matriz[listaTemp[0] - i][listaTemp[1] - i].nome != "vazio"
    ) {
      margem.push(matriz[listaTemp[0] - i][listaTemp[1] - i].posicao);
      break;
    }
  }
  peca.ameaca = margem;
}

function ameacaTorres(letra, numero, peca) {
  listaTemp = posicaoParaMatriz(letra, numero);
  let margem = [];
  for (let i = 1; i < 8; i++) {
    if (
      matriz[listaTemp[0] + i] &&
      matriz[listaTemp[0] + i][listaTemp[1]] &&
      matriz[listaTemp[0] + i][listaTemp[1]].nome == "vazio"
    ) {
      margem.push(matriz[listaTemp[0] + i][listaTemp[1]].posicao);
    }
    if (
      matriz[listaTemp[0] + i] &&
      matriz[listaTemp[0] + i][listaTemp[1]] &&
      matriz[listaTemp[0] + i][listaTemp[1]].nome != "vazio"
    ) {
      margem.push(matriz[listaTemp[0] + i][listaTemp[1]].posicao);
      break;
    }
  }
  for (let i = 1; i < 8; i++) {
    if (
      matriz[listaTemp[0] - i] &&
      matriz[listaTemp[0] - i][listaTemp[1]] &&
      matriz[listaTemp[0] - i][listaTemp[1]].nome == "vazio"
    ) {
      margem.push(matriz[listaTemp[0] - i][listaTemp[1]].posicao);
    }
    if (
      matriz[listaTemp[0] - i] &&
      matriz[listaTemp[0] - i][listaTemp[1]] &&
      matriz[listaTemp[0] - i][listaTemp[1]].nome != "vazio"
    ) {
      margem.push(matriz[listaTemp[0] - i][listaTemp[1]].posicao);
      break;
    }
  }
  for (let i = 1; i < 8; i++) {
    if (
      matriz[listaTemp[0]] &&
      matriz[listaTemp[0]][listaTemp[1] + i] &&
      matriz[listaTemp[0]][listaTemp[1] + i].nome == "vazio"
    ) {
      margem.push(matriz[listaTemp[0]][listaTemp[1] + i].posicao);
    }
    if (
      matriz[listaTemp[0]] &&
      matriz[listaTemp[0]][listaTemp[1] + i] &&
      matriz[listaTemp[0]][listaTemp[1] + i].nome != "vazio"
    ) {
      margem.push(matriz[listaTemp[0]][listaTemp[1] + i].posicao);
      break;
    }
  }
  for (let i = 1; i < 8; i++) {
    if (
      matriz[listaTemp[0]] &&
      matriz[listaTemp[0]][listaTemp[1] - i] &&
      matriz[listaTemp[0]][listaTemp[1] - i].nome == "vazio"
    ) {
      margem.push(matriz[listaTemp[0]][listaTemp[1] - i].posicao);
    }
    if (
      matriz[listaTemp[0]] &&
      matriz[listaTemp[0]][listaTemp[1] - i] &&
      matriz[listaTemp[0]][listaTemp[1] - i].nome != "vazio"
    ) {
      margem.push(matriz[listaTemp[0]][listaTemp[1] - i].posicao);
      break;
    }
  }
  peca.ameaca = margem;
}

function ameacaRainhas(letra, numero, peca) {
  listaTemp = posicaoParaMatriz(letra, numero);
  let margem = [];
  for (let i = 1; i < 8; i++) {
    if (
      matriz[listaTemp[0] + i] &&
      matriz[listaTemp[0] + i][listaTemp[1] + i] &&
      matriz[listaTemp[0] + i][listaTemp[1] + i].nome == "vazio"
    ) {
      margem.push(matriz[listaTemp[0] + i][listaTemp[1] + i].posicao);
    }
    if (
      matriz[listaTemp[0] + i] &&
      matriz[listaTemp[0] + i][listaTemp[1] + i] &&
      matriz[listaTemp[0] + i][listaTemp[1] + i].nome != "vazio"
    ) {
      margem.push(matriz[listaTemp[0] + i][listaTemp[1] + i].posicao);
      break;
    }
  }
  for (let i = 1; i < 8; i++) {
    if (
      matriz[listaTemp[0] - i] &&
      matriz[listaTemp[0] - i][listaTemp[1] + i] &&
      matriz[listaTemp[0] - i][listaTemp[1] + i].nome == "vazio"
    ) {
      margem.push(matriz[listaTemp[0] - i][listaTemp[1] + i].posicao);
    }
    if (
      matriz[listaTemp[0] - i] &&
      matriz[listaTemp[0] - i][listaTemp[1] + i] &&
      matriz[listaTemp[0] - i][listaTemp[1] + i].nome != "vazio"
    ) {
      margem.push(matriz[listaTemp[0] - i][listaTemp[1] + i].posicao);
      break;
    }
  }
  for (let i = 1; i < 8; i++) {
    if (
      matriz[listaTemp[0] + i] &&
      matriz[listaTemp[0] + i][listaTemp[1] - i] &&
      matriz[listaTemp[0] + i][listaTemp[1] - i].nome == "vazio"
    ) {
      margem.push(matriz[listaTemp[0] + i][listaTemp[1] - i].posicao);
    }
    if (
      matriz[listaTemp[0] + i] &&
      matriz[listaTemp[0] + i][listaTemp[1] - i] &&
      matriz[listaTemp[0] + i][listaTemp[1] - i].nome != "vazio"
    ) {
      margem.push(matriz[listaTemp[0] + i][listaTemp[1] - i].posicao);
      break;
    }
  }
  for (let i = 1; i < 8; i++) {
    if (
      matriz[listaTemp[0] - i] &&
      matriz[listaTemp[0] - i][listaTemp[1] - i] &&
      matriz[listaTemp[0] - i][listaTemp[1] - i].nome == "vazio"
    ) {
      margem.push(matriz[listaTemp[0] - i][listaTemp[1] - i].posicao);
    }
    if (
      matriz[listaTemp[0] - i] &&
      matriz[listaTemp[0] - i][listaTemp[1] - i] &&
      matriz[listaTemp[0] - i][listaTemp[1] - i].nome != "vazio"
    ) {
      margem.push(matriz[listaTemp[0] - i][listaTemp[1] - i].posicao);
      break;
    }
  }
  for (let i = 1; i < 8; i++) {
    if (
      matriz[listaTemp[0] + i] &&
      matriz[listaTemp[0] + i][listaTemp[1]] &&
      matriz[listaTemp[0] + i][listaTemp[1]].nome == "vazio"
    ) {
      margem.push(matriz[listaTemp[0] + i][listaTemp[1]].posicao);
    }
    if (
      matriz[listaTemp[0] + i] &&
      matriz[listaTemp[0] + i][listaTemp[1]] &&
      matriz[listaTemp[0] + i][listaTemp[1]].nome != "vazio"
    ) {
      margem.push(matriz[listaTemp[0] + i][listaTemp[1]].posicao);
      break;
    }
  }
  for (let i = 1; i < 8; i++) {
    if (
      matriz[listaTemp[0] - i] &&
      matriz[listaTemp[0] - i][listaTemp[1]] &&
      matriz[listaTemp[0] - i][listaTemp[1]].nome == "vazio"
    ) {
      margem.push(matriz[listaTemp[0] - i][listaTemp[1]].posicao);
    }
    if (
      matriz[listaTemp[0] - i] &&
      matriz[listaTemp[0] - i][listaTemp[1]] &&
      matriz[listaTemp[0] - i][listaTemp[1]].nome != "vazio"
    ) {
      margem.push(matriz[listaTemp[0] - i][listaTemp[1]].posicao);
      break;
    }
  }
  for (let i = 1; i < 8; i++) {
    if (
      matriz[listaTemp[0]] &&
      matriz[listaTemp[0]][listaTemp[1] + i] &&
      matriz[listaTemp[0]][listaTemp[1] + i].nome == "vazio"
    ) {
      margem.push(matriz[listaTemp[0]][listaTemp[1] + i].posicao);
    }
    if (
      matriz[listaTemp[0]] &&
      matriz[listaTemp[0]][listaTemp[1] + i] &&
      matriz[listaTemp[0]][listaTemp[1] + i].nome != "vazio"
    ) {
      margem.push(matriz[listaTemp[0]][listaTemp[1] + i].posicao);
      break;
    }
  }
  for (let i = 1; i < 8; i++) {
    if (
      matriz[listaTemp[0]] &&
      matriz[listaTemp[0]][listaTemp[1] - i] &&
      matriz[listaTemp[0]][listaTemp[1] - i].nome == "vazio"
    ) {
      margem.push(matriz[listaTemp[0]][listaTemp[1] - i].posicao);
    }
    if (
      matriz[listaTemp[0]] &&
      matriz[listaTemp[0]][listaTemp[1] - i] &&
      matriz[listaTemp[0]][listaTemp[1] - i].nome != "vazio"
    ) {
      margem.push(matriz[listaTemp[0]][listaTemp[1] - i].posicao);
      break;
    }
  }
  peca.ameaca = margem;
}

function ameacaReis(letra, numero, peca) {
  let listaTemporaria = posicaoParaMatriz(letra, numero);
  let margem = [];
  if (
    matriz[listaTemporaria[0] - 1] &&
    matriz[listaTemporaria[0] - 1][listaTemporaria[1] - 1]
  ) {
    margem.push(matriz[listaTemporaria[0] - 1][listaTemporaria[1] - 1].posicao);
  }
  if (
    matriz[listaTemporaria[0] - 1] &&
    matriz[listaTemporaria[0] - 1][listaTemporaria[1]]
  ) {
    margem.push(matriz[listaTemporaria[0] - 1][listaTemporaria[1]].posicao);
  }
  if (
    matriz[listaTemporaria[0] - 1] &&
    matriz[listaTemporaria[0] - 1][listaTemporaria[1] + 1]
  ) {
    margem.push(matriz[listaTemporaria[0] - 1][listaTemporaria[1] + 1].posicao);
  }
  if (
    matriz[listaTemporaria[0]] &&
    matriz[listaTemporaria[0]][listaTemporaria[1] - 1]
  ) {
    margem.push(matriz[listaTemporaria[0]][listaTemporaria[1] - 1].posicao);
  }
  if (
    matriz[listaTemporaria[0]] &&
    matriz[listaTemporaria[0]][listaTemporaria[1] + 1]
  ) {
    margem.push(matriz[listaTemporaria[0]][listaTemporaria[1] + 1].posicao);
  }
  if (
    matriz[listaTemporaria[0] + 1] &&
    matriz[listaTemporaria[0] + 1][listaTemporaria[1] - 1]
  ) {
    margem.push(matriz[listaTemporaria[0] + 1][listaTemporaria[1] - 1].posicao);
  }
  if (
    matriz[listaTemporaria[0] + 1] &&
    matriz[listaTemporaria[0] + 1][listaTemporaria[1]]
  ) {
    margem.push(matriz[listaTemporaria[0] + 1][listaTemporaria[1]].posicao);
  }
  if (
    matriz[listaTemporaria[0] + 1] &&
    matriz[listaTemporaria[0] + 1][listaTemporaria[1] + 1]
  ) {
    margem.push(matriz[listaTemporaria[0] + 1][listaTemporaria[1] + 1].posicao);
  }
  // Movimento de ROQUE
  let pecaCopia = {...matriz[listaTemporaria[0]][listaTemporaria[1]]};
  if (peca.contador == 0) {
    for (let i = 1; i < 5; i++) {
      // ROQUE para a ESQUERDA
      if (
        i == 4 &&
        (listaTorresBrancas.includes(
          matriz[listaTemporaria[0]][listaTemporaria[1] - 4].nome
        ) ||
          listaTorresPretas.includes(
            matriz[listaTemporaria[0]][listaTemporaria[1] - 4].nome
          ))
      ) {
        if (matriz[listaTemporaria[0]][listaTemporaria[1] - 4].contador == 0) {
          margem.push(
            matriz[listaTemporaria[0]][listaTemporaria[1] - 2].posicao
          );
        }
      }
      if (i < 4) {
        if (
          pecaCopia.nome == "reiBranco" &&
          listaAmeacasPretas.includes(
            matriz[listaTemporaria[0]][listaTemporaria[1] - i].posicao
          )
        ) {
          break;
        }
        if (
          pecaCopia.nome == "reiPreto" &&
          listaAmeacasBrancas.includes(
            matriz[listaTemporaria[0]][listaTemporaria[1] - i].posicao
          )
        ) {
          break;
        }
      }
      if (matriz[listaTemporaria[0]][listaTemporaria[1] - i].nome != "vazio") {
        break;
      }
    }
    for (let i = 1; i < 4; i++) {
      // ROQUE para a DIREITA
      if (
        i == 3 &&
        (listaTorresBrancas.includes(
          matriz[listaTemporaria[0]][listaTemporaria[1] + 3].nome
        ) ||
          listaTorresPretas.includes(
            matriz[listaTemporaria[0]][listaTemporaria[1] + 3].nome
          ))
      ) {
        if (matriz[listaTemporaria[0]][listaTemporaria[1] + 3].contador == 0) {
          margem.push(
            matriz[listaTemporaria[0]][listaTemporaria[1] + 2].posicao
          );
        }
      }
      if (i < 3) {
        if (
          pecaCopia.nome == "reiBranco" &&
          listaAmeacasPretas.includes(
            matriz[listaTemporaria[0]][listaTemporaria[1] + i].posicao
          )
        ) {
          break;
        }
        if (
          pecaCopia.nome == "reiPreto" &&
          listaAmeacasBrancas.includes(
            matriz[listaTemporaria[0]][listaTemporaria[1] + i].posicao
          )
        ) {
          break;
        }
      }
      if (matriz[listaTemporaria[0]][listaTemporaria[1] + i].nome != "vazio") {
        break;
      }
    }
  }
  matriz[listaTemporaria[0]][listaTemporaria[1]] = pecaCopia;
  matriz[listaTemporaria[0]][listaTemporaria[1]].ameaca = margem;
}

// AMEAÇA REIS ANTES DO REWORK
function ameacaRais(letra, numero, peca) {
  let listaTemporaria = posicaoParaMatriz(letra, numero);
  let margem = [];
  let pecaCopia = { ...matriz[listaTemporaria[0]][listaTemporaria[1]] };
  matriz[listaTemporaria[0]][listaTemporaria[1]].nome = "vazio";
  atualizarAmeacasSemRei();
  if (
    matriz[listaTemporaria[0] - 1] &&
    matriz[listaTemporaria[0] - 1][listaTemporaria[1] - 1]
  ) {
    if (
      pecaCopia.nome == "reiBranco" &&
      !listaAmeacasPretas.includes(
        matriz[listaTemporaria[0] - 1][listaTemporaria[1] - 1].posicao
      )
    ) {
      margem.push(
        matriz[listaTemporaria[0] - 1][listaTemporaria[1] - 1].posicao
      );
      if (
        matriz[listaTemporaria[0]] &&
        matriz[listaTemporaria[0]][listaTemporaria[1] - 2] &&
        matriz[listaTemporaria[0]][listaTemporaria[1] - 2].nome == "reiPreto"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] - 1] &&
        matriz[listaTemporaria[0] - 1][listaTemporaria[1] - 2] &&
        matriz[listaTemporaria[0] - 1][listaTemporaria[1] - 2].nome ==
          "reiPreto"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] - 2] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1] - 2] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1] - 2].nome ==
          "reiPreto"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] - 2] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1] - 1] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1] - 1].nome ==
          "reiPreto"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] - 2] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1]] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1]].nome == "reiPreto"
      ) {
        margem.pop();
      }
    }
    if (
      pecaCopia.nome == "reiPreto" &&
      !listaAmeacasBrancas.includes(
        matriz[listaTemporaria[0] - 1][listaTemporaria[1] - 1].posicao
      )
    ) {
      margem.push(
        matriz[listaTemporaria[0] - 1][listaTemporaria[1] - 1].posicao
      );
      if (
        matriz[listaTemporaria[0]] &&
        matriz[listaTemporaria[0]][listaTemporaria[1] - 2] &&
        matriz[listaTemporaria[0]][listaTemporaria[1] - 2].nome == "reiBranco"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] - 1] &&
        matriz[listaTemporaria[0] - 1][listaTemporaria[1] - 2] &&
        matriz[listaTemporaria[0] - 1][listaTemporaria[1] - 2].nome ==
          "reiBranco"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] - 2] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1] - 2] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1] - 2].nome ==
          "reiBranco"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] - 2] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1] - 1] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1] - 1].nome ==
          "reiBranco"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] - 2] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1]] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1]].nome == "reiBranco"
      ) {
        margem.pop();
      }
    }
  }
  if (
    matriz[listaTemporaria[0] - 1] &&
    matriz[listaTemporaria[0] - 1][listaTemporaria[1]]
  ) {
    if (
      pecaCopia.nome == "reiBranco" &&
      !listaAmeacasPretas.includes(
        matriz[listaTemporaria[0] - 1][listaTemporaria[1]].posicao
      )
    ) {
      margem.push(matriz[listaTemporaria[0] - 1][listaTemporaria[1]].posicao);
      if (
        matriz[listaTemporaria[0] - 2] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1] - 1] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1] - 1].nome ==
          "reiPreto"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] - 2] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1]] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1]].nome == "reiPreto"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] - 2] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1] + 1] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1] + 1].nome ==
          "reiPreto"
      ) {
        margem.pop();
      }
    }
    if (
      pecaCopia.nome == "reiPreto" &&
      !listaAmeacasBrancas.includes(
        matriz[listaTemporaria[0] - 1][listaTemporaria[1]].posicao
      )
    ) {
      margem.push(matriz[listaTemporaria[0] - 1][listaTemporaria[1]].posicao);
      if (
        matriz[listaTemporaria[0] - 2] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1] - 1] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1] - 1].nome ==
          "reiBranco"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] - 2] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1]] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1]].nome == "reiBranco"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] - 2] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1] + 1] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1] + 1].nome ==
          "reiBranco"
      ) {
        margem.pop();
      }
    }
  }
  if (
    matriz[listaTemporaria[0] - 1] &&
    matriz[listaTemporaria[0] - 1][listaTemporaria[1] + 1]
  ) {
    if (
      pecaCopia.nome == "reiBranco" &&
      !listaAmeacasPretas.includes(
        matriz[listaTemporaria[0] - 1][listaTemporaria[1] + 1].posicao
      )
    ) {
      margem.push(
        matriz[listaTemporaria[0] - 1][listaTemporaria[1] + 1].posicao
      );
      if (
        matriz[listaTemporaria[0]] &&
        matriz[listaTemporaria[0]][listaTemporaria[1] + 2] &&
        matriz[listaTemporaria[0]][listaTemporaria[1] + 2].nome == "reiPreto"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] - 1] &&
        matriz[listaTemporaria[0] - 1][listaTemporaria[1] + 2] &&
        matriz[listaTemporaria[0] - 1][listaTemporaria[1] + 2].nome ==
          "reiPreto"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] - 2] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1] + 2] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1] + 2].nome ==
          "reiPreto"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] - 2] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1] + 1] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1] + 1].nome ==
          "reiPreto"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] - 2] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1]] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1]].nome == "reiPreto"
      ) {
        margem.pop();
      }
    }
    if (
      pecaCopia.nome == "reiPreto" &&
      !listaAmeacasBrancas.includes(
        matriz[listaTemporaria[0] - 1][listaTemporaria[1] + 1].posicao
      )
    ) {
      margem.push(
        matriz[listaTemporaria[0] - 1][listaTemporaria[1] + 1].posicao
      );
      if (
        matriz[listaTemporaria[0]] &&
        matriz[listaTemporaria[0]][listaTemporaria[1] + 2] &&
        matriz[listaTemporaria[0]][listaTemporaria[1] + 2].nome == "reiBranco"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] - 1] &&
        matriz[listaTemporaria[0] - 1][listaTemporaria[1] + 2] &&
        matriz[listaTemporaria[0] - 1][listaTemporaria[1] + 2].nome ==
          "reiBranco"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] - 2] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1] + 2] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1] + 2].nome ==
          "reiBranco"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] - 2] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1] + 1] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1] + 1].nome ==
          "reiBranco"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] - 2] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1]] &&
        matriz[listaTemporaria[0] - 2][listaTemporaria[1]].nome == "reiBranco"
      ) {
        margem.pop();
      }
    }
  }
  if (
    matriz[listaTemporaria[0]] &&
    matriz[listaTemporaria[0]][listaTemporaria[1] - 1]
  ) {
    if (
      pecaCopia.nome == "reiBranco" &&
      !listaAmeacasPretas.includes(
        matriz[listaTemporaria[0]][listaTemporaria[1] - 1].posicao
      )
    ) {
      margem.push(matriz[listaTemporaria[0]][listaTemporaria[1] - 1].posicao);
      if (
        matriz[listaTemporaria[0] - 1] &&
        matriz[listaTemporaria[0] - 1][listaTemporaria[1] - 2] &&
        matriz[listaTemporaria[0] - 1][listaTemporaria[1] - 2].nome ==
          "reiPreto"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0]] &&
        matriz[listaTemporaria[0]][listaTemporaria[1] - 2] &&
        matriz[listaTemporaria[0]][listaTemporaria[1] - 2].nome == "reiPreto"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] + 1] &&
        matriz[listaTemporaria[0] + 1][listaTemporaria[1] - 2] &&
        matriz[listaTemporaria[0] + 1][listaTemporaria[1] - 2].nome ==
          "reiPreto"
      ) {
        margem.pop();
      }
    }
    if (
      pecaCopia.nome == "reiPreto" &&
      !listaAmeacasBrancas.includes(
        matriz[listaTemporaria[0]][listaTemporaria[1] - 1].posicao
      )
    ) {
      margem.push(matriz[listaTemporaria[0]][listaTemporaria[1] - 1].posicao);
      if (
        matriz[listaTemporaria[0] - 1] &&
        matriz[listaTemporaria[0] - 1][listaTemporaria[1] - 2] &&
        matriz[listaTemporaria[0] - 1][listaTemporaria[1] - 2].nome ==
          "reiBranco"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0]] &&
        matriz[listaTemporaria[0]][listaTemporaria[1] - 2] &&
        matriz[listaTemporaria[0]][listaTemporaria[1] - 2].nome == "reiBranco"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] + 1] &&
        matriz[listaTemporaria[0] + 1][listaTemporaria[1] - 2] &&
        matriz[listaTemporaria[0] + 1][listaTemporaria[1] - 2].nome ==
          "reiBranco"
      ) {
        margem.pop();
      }
    }
  }
  if (
    matriz[listaTemporaria[0]] &&
    matriz[listaTemporaria[0]][listaTemporaria[1] + 1]
  ) {
    if (
      pecaCopia.nome == "reiBranco" &&
      !listaAmeacasPretas.includes(
        matriz[listaTemporaria[0]][listaTemporaria[1] + 1].posicao
      )
    ) {
      margem.push(matriz[listaTemporaria[0]][listaTemporaria[1] + 1].posicao);
      if (
        matriz[listaTemporaria[0] - 1] &&
        matriz[listaTemporaria[0] - 1][listaTemporaria[1] + 2] &&
        matriz[listaTemporaria[0] - 1][listaTemporaria[1] + 2].nome ==
          "reiPreto"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0]] &&
        matriz[listaTemporaria[0]][listaTemporaria[1] + 2] &&
        matriz[listaTemporaria[0]][listaTemporaria[1] + 2].nome == "reiPreto"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] + 1] &&
        matriz[listaTemporaria[0] + 1][listaTemporaria[1] + 2] &&
        matriz[listaTemporaria[0] + 1][listaTemporaria[1] + 2].nome ==
          "reiPreto"
      ) {
        margem.pop();
      }
    }
    if (
      pecaCopia.nome == "reiPreto" &&
      !listaAmeacasBrancas.includes(
        matriz[listaTemporaria[0]][listaTemporaria[1] + 1].posicao
      )
    ) {
      margem.push(matriz[listaTemporaria[0]][listaTemporaria[1] + 1].posicao);
      if (
        matriz[listaTemporaria[0] - 1] &&
        matriz[listaTemporaria[0] - 1][listaTemporaria[1] + 2] &&
        matriz[listaTemporaria[0] - 1][listaTemporaria[1] + 2].nome ==
          "reiBranco"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0]] &&
        matriz[listaTemporaria[0]][listaTemporaria[1] + 2] &&
        matriz[listaTemporaria[0]][listaTemporaria[1] + 2].nome == "reiBranco"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] + 1] &&
        matriz[listaTemporaria[0] + 1][listaTemporaria[1] + 2] &&
        matriz[listaTemporaria[0] + 1][listaTemporaria[1] + 2].nome ==
          "reiBranco"
      ) {
        margem.pop();
      }
    }
  }
  if (
    matriz[listaTemporaria[0] + 1] &&
    matriz[listaTemporaria[0] + 1][listaTemporaria[1] - 1]
  ) {
    if (
      pecaCopia.nome == "reiBranco" &&
      !listaAmeacasPretas.includes(
        matriz[listaTemporaria[0] + 1][listaTemporaria[1] - 1].posicao
      )
    ) {
      margem.push(
        matriz[listaTemporaria[0] + 1][listaTemporaria[1] - 1].posicao
      );
      if (
        matriz[listaTemporaria[0]] &&
        matriz[listaTemporaria[0]][listaTemporaria[1] - 2] &&
        matriz[listaTemporaria[0]][listaTemporaria[1] - 2].nome == "reiPreto"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] + 1] &&
        matriz[listaTemporaria[0] + 1][listaTemporaria[1] - 2] &&
        matriz[listaTemporaria[0] + 1][listaTemporaria[1] - 2].nome ==
          "reiPreto"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] + 2] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1] - 2] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1] - 2].nome ==
          "reiPreto"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] + 2] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1] - 1] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1] - 1].nome ==
          "reiPreto"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] + 2] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1]] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1]].nome == "reiPreto"
      ) {
        margem.pop();
      }
    }
    if (
      pecaCopia.nome == "reiPreto" &&
      !listaAmeacasBrancas.includes(
        matriz[listaTemporaria[0] + 1][listaTemporaria[1] - 1].posicao
      )
    ) {
      margem.push(
        matriz[listaTemporaria[0] + 1][listaTemporaria[1] - 1].posicao
      );
      if (
        matriz[listaTemporaria[0]] &&
        matriz[listaTemporaria[0]][listaTemporaria[1] - 2] &&
        matriz[listaTemporaria[0]][listaTemporaria[1] - 2].nome == "reiBranco"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] + 1] &&
        matriz[listaTemporaria[0] + 1][listaTemporaria[1] - 2] &&
        matriz[listaTemporaria[0] + 1][listaTemporaria[1] - 2].nome ==
          "reiBranco"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] + 2] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1] - 2] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1] - 2].nome ==
          "reiBranco"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] + 2] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1] - 1] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1] - 1].nome ==
          "reiBranco"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] + 2] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1]] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1]].nome == "reiBranco"
      ) {
        margem.pop();
      }
    }
  }
  if (
    matriz[listaTemporaria[0] + 1] &&
    matriz[listaTemporaria[0] + 1][listaTemporaria[1]]
  ) {
    if (
      pecaCopia.nome == "reiBranco" &&
      !listaAmeacasPretas.includes(
        matriz[listaTemporaria[0] + 1][listaTemporaria[1]].posicao
      )
    ) {
      margem.push(matriz[listaTemporaria[0] + 1][listaTemporaria[1]].posicao);
      if (
        matriz[listaTemporaria[0] + 2] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1] - 1] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1] - 1].nome ==
          "reiPreto"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] + 2] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1]] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1]].nome == "reiPreto"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] + 2] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1] + 1] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1] + 1].nome ==
          "reiPreto"
      ) {
        margem.pop();
      }
    }
    if (
      pecaCopia.nome == "reiPreto" &&
      !listaAmeacasBrancas.includes(
        matriz[listaTemporaria[0] + 1][listaTemporaria[1]].posicao
      )
    ) {
      margem.push(matriz[listaTemporaria[0] + 1][listaTemporaria[1]].posicao);
      if (
        matriz[listaTemporaria[0] + 2] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1] - 1] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1] - 1].nome ==
          "reiBranco"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] + 2] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1]] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1]].nome == "reiBranco"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] + 2] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1] + 1] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1] + 1].nome ==
          "reiBranco"
      ) {
        margem.pop();
      }
    }
  }
  if (
    matriz[listaTemporaria[0] + 1] &&
    matriz[listaTemporaria[0] + 1][listaTemporaria[1] + 1]
  ) {
    if (
      pecaCopia.nome == "reiBranco" &&
      !listaAmeacasPretas.includes(
        matriz[listaTemporaria[0] + 1][listaTemporaria[1] + 1].posicao
      )
    ) {
      margem.push(
        matriz[listaTemporaria[0] + 1][listaTemporaria[1] + 1].posicao
      );
      if (
        matriz[listaTemporaria[0]] &&
        matriz[listaTemporaria[0]][listaTemporaria[1] + 2] &&
        matriz[listaTemporaria[0]][listaTemporaria[1] + 2].nome == "reiPreto"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] + 1] &&
        matriz[listaTemporaria[0] + 1][listaTemporaria[1] + 2] &&
        matriz[listaTemporaria[0] + 1][listaTemporaria[1] + 2].nome ==
          "reiPreto"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] + 2] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1] + 2] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1] + 2].nome ==
          "reiPreto"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] + 2] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1] + 1] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1] + 1].nome ==
          "reiPreto"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] + 2] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1]] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1]].nome == "reiPreto"
      ) {
        margem.pop();
      }
    }
    if (
      pecaCopia.nome == "reiPreto" &&
      !listaAmeacasBrancas.includes(
        matriz[listaTemporaria[0] + 1][listaTemporaria[1] + 1].posicao
      )
    ) {
      margem.push(
        matriz[listaTemporaria[0] + 1][listaTemporaria[1] + 1].posicao
      );
      if (
        matriz[listaTemporaria[0]] &&
        matriz[listaTemporaria[0]][listaTemporaria[1] + 2] &&
        matriz[listaTemporaria[0]][listaTemporaria[1] + 2].nome == "reiBranco"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] + 1] &&
        matriz[listaTemporaria[0] + 1][listaTemporaria[1] + 2] &&
        matriz[listaTemporaria[0] + 1][listaTemporaria[1] + 2].nome ==
          "reiBranco"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] + 2] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1] + 2] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1] + 2].nome ==
          "reiBranco"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] + 2] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1] + 1] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1] + 1].nome ==
          "reiBranco"
      ) {
        margem.pop();
      }
      if (
        matriz[listaTemporaria[0] + 2] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1]] &&
        matriz[listaTemporaria[0] + 2][listaTemporaria[1]].nome == "reiBranco"
      ) {
        margem.pop();
      }
    }
  }
  // Movimento de ROQUE
  if (peca.contador == 0) {
    for (let i = 1; i < 5; i++) {
      // ROQUE para a ESQUERDA
      if (
        i == 4 &&
        (listaTorresBrancas.includes(
          matriz[listaTemporaria[0]][listaTemporaria[1] - 4].nome
        ) ||
          listaTorresPretas.includes(
            matriz[listaTemporaria[0]][listaTemporaria[1] - 4].nome
          ))
      ) {
        if (matriz[listaTemporaria[0]][listaTemporaria[1] - 4].contador == 0) {
          margem.push(
            matriz[listaTemporaria[0]][listaTemporaria[1] - 2].posicao
          );
        }
      }
      if (i < 4) {
        if (
          pecaCopia.nome == "reiBranco" &&
          listaAmeacasPretas.includes(
            matriz[listaTemporaria[0]][listaTemporaria[1] - i].posicao
          )
        ) {
          break;
        }
        if (
          pecaCopia.nome == "reiPreto" &&
          listaAmeacasBrancas.includes(
            matriz[listaTemporaria[0]][listaTemporaria[1] - i].posicao
          )
        ) {
          break;
        }
      }
      if (matriz[listaTemporaria[0]][listaTemporaria[1] - i].nome != "vazio") {
        break;
      }
    }
    for (let i = 1; i < 4; i++) {
      // ROQUE para a DIREITA
      if (
        i == 3 &&
        (listaTorresBrancas.includes(
          matriz[listaTemporaria[0]][listaTemporaria[1] + 3].nome
        ) ||
          listaTorresPretas.includes(
            matriz[listaTemporaria[0]][listaTemporaria[1] + 3].nome
          ))
      ) {
        if (matriz[listaTemporaria[0]][listaTemporaria[1] + 3].contador == 0) {
          margem.push(
            matriz[listaTemporaria[0]][listaTemporaria[1] + 2].posicao
          );
        }
      }
      if (i < 3) {
        if (
          pecaCopia.nome == "reiBranco" &&
          listaAmeacasPretas.includes(
            matriz[listaTemporaria[0]][listaTemporaria[1] + i].posicao
          )
        ) {
          break;
        }
        if (
          pecaCopia.nome == "reiPreto" &&
          listaAmeacasBrancas.includes(
            matriz[listaTemporaria[0]][listaTemporaria[1] + i].posicao
          )
        ) {
          break;
        }
      }
      if (matriz[listaTemporaria[0]][listaTemporaria[1] + i].nome != "vazio") {
        break;
      }
    }
  }
  matriz[listaTemporaria[0]][listaTemporaria[1]] = pecaCopia;
  matriz[listaTemporaria[0]][listaTemporaria[1]].ameaca = margem;
  atualizarAmeacasSemRei();
}

function matarPeca(letra, numero, peca, localizacao) {
  // AVISANDO O JOGADOR SOBRE DE QUEM É O TURNO
  let turnoP = document.getElementById("turnoP");
  let turno = document.getElementById("turno");
  if (turnoBrancas == 0) {
    turnoP.innerText = "Brancas";
    turnoP.style.color = "white";
    turno.style.backgroundColor = "white";
    turnoP.style.textShadow =
      "-1px -2px #000, 1px -2px #000, -1px 2px #000, 1px 2px #000";
  }
  if (turnoPretas == 0) {
    turnoP.innerText = "Pretas";
    turnoP.style.color = "black";
    turno.style.backgroundColor = "black";
    turnoP.style.textShadow =
      "-1px -2px white, 1px -2px white, -1px 2px white, 1px 2px white";
  }

  const quadradoAtacante = document.getElementById(localizacao);
  const quadradoAlvo = document.getElementById(peca.posicao);

  const imagemQuadradoAtacante = quadradoAtacante.querySelector("img");
  const imagemQuadradoAlvo = quadradoAlvo.querySelector("img");

  if (imagemQuadradoAlvo) {
    quadradoAlvo.replaceChild(
      imagemQuadradoAtacante.cloneNode(true),
      imagemQuadradoAlvo
    );
  } else {
    quadradoAlvo.appendChild(imagemQuadradoAtacante.cloneNode(true));
  }

  quadradoAtacante.removeChild(imagemQuadradoAtacante);

  localizacao = localizacao.split(/(\d+)/);

  let posicaoPecaAlvo = posicaoParaMatriz(letra, numero);
  let posicaoPecaAtacante = posicaoParaMatriz(localizacao[0], localizacao[1]);

  let copiaTemporaria = {
    ...matriz[posicaoPecaAtacante[0]][posicaoPecaAtacante[1]],
  };
  copiaTemporaria.posicao =
    matriz[posicaoPecaAlvo[0]][posicaoPecaAlvo[1]].posicao;

  matriz[posicaoPecaAlvo[0]][posicaoPecaAlvo[1]] = copiaTemporaria;
  matriz[posicaoPecaAlvo[0]][posicaoPecaAlvo[1]].contador++;
  matriz[posicaoPecaAtacante[0]][posicaoPecaAtacante[1]].nome = "vazio";
  matriz[posicaoPecaAtacante[0]][posicaoPecaAtacante[1]].contador = 0;
  matriz[posicaoPecaAtacante[0]][posicaoPecaAtacante[1]].ameaca = [];
  matriz[posicaoPecaAtacante[0]][posicaoPecaAtacante[1]].movimento = [];
}

function enPassant(letra, numero, selecionada) {
  let quadrado = posicaoParaMatriz(letra, numero);
  if (listaPeoesBrancos.includes(selecionada.nome)) {
    let proximoQuadrado = matriz[quadrado[0] + 1][quadrado[1]];
    if (proximoQuadrado) {
      quadrado = document.getElementById(proximoQuadrado.posicao);
      proximoQuadrado.nome = "vazio";
      proximoQuadrado.contador = 0;
      proximoQuadrado.ameaca = [];
      proximoQuadrado.movimento = [];
    }
  }
  if (listaPeoesPretos.includes(selecionada.nome)) {
    let proximoQuadrado = matriz[quadrado[0] - 1][quadrado[1]];
    if (proximoQuadrado) {
      quadrado = document.getElementById(proximoQuadrado.posicao);
      proximoQuadrado.nome = "vazio";
      proximoQuadrado.contador = 0;
      proximoQuadrado.ameaca = [];
      proximoQuadrado.movimento = [];
    }
  }
  let imagem = quadrado.getElementsByTagName("img");
  if (imagem[0]) {
    quadrado.removeChild(imagem[0]);
  }
}

function roqueDireita(selecionada) {
  let posicaoTorreAntesRoque = selecionada.posicao;
  posicaoTorreAntesRoque = posicaoTorreAntesRoque.split(/(\d+)/);
  posicaoTorreAntesRoque = posicaoParaMatriz(
    posicaoTorreAntesRoque[0],
    posicaoTorreAntesRoque[1]
  );
  posicaoTorreAntesRoque[1] = posicaoTorreAntesRoque[1] + 3;

  let posicaoTorreDepoisRoque = selecionada.posicao;
  posicaoTorreDepoisRoque = posicaoTorreDepoisRoque.split(/(\d+)/);
  posicaoTorreDepoisRoque = posicaoParaMatriz(
    posicaoTorreDepoisRoque[0],
    posicaoTorreDepoisRoque[1]
  );
  posicaoTorreDepoisRoque[1] = posicaoTorreDepoisRoque[1] + 1;

  const quadradoAtacante = document.getElementById(
    matriz[posicaoTorreAntesRoque[0]][posicaoTorreAntesRoque[1]].posicao
  );
  const quadradoAlvo = document.getElementById(
    matriz[posicaoTorreDepoisRoque[0]][posicaoTorreDepoisRoque[1]].posicao
  );

  const imagemQuadradoAtacante = quadradoAtacante.querySelector("img");
  const imagemQuadradoAlvo = quadradoAlvo.querySelector("img");

  if (imagemQuadradoAlvo) {
    quadradoAlvo.replaceChild(
      imagemQuadradoAtacante.cloneNode(true),
      imagemQuadradoAlvo
    );
  } else {
    quadradoAlvo.appendChild(imagemQuadradoAtacante.cloneNode(true));
  }

  quadradoAtacante.removeChild(imagemQuadradoAtacante);

  let copiaTemporaria = {
    ...matriz[posicaoTorreAntesRoque[0]][posicaoTorreAntesRoque[1]],
  };

  copiaTemporaria.posicao =
    matriz[posicaoTorreDepoisRoque[0]][posicaoTorreDepoisRoque[1]].posicao;

  matriz[posicaoTorreDepoisRoque[0]][posicaoTorreDepoisRoque[1]] =
    copiaTemporaria;
  matriz[posicaoTorreDepoisRoque[0]][posicaoTorreDepoisRoque[1]].contador++;

  matriz[posicaoTorreAntesRoque[0]][posicaoTorreAntesRoque[1]].nome = "vazio";
  matriz[posicaoTorreAntesRoque[0]][posicaoTorreAntesRoque[1]].contador = 0;
  matriz[posicaoTorreAntesRoque[0]][posicaoTorreAntesRoque[1]].ameaca = [];
  matriz[posicaoTorreAntesRoque[0]][posicaoTorreAntesRoque[1]].movimento = [];
}

function roqueEsquerda(selecionada) {
  let posicaoTorreAntesRoque = selecionada.posicao;
  posicaoTorreAntesRoque = posicaoTorreAntesRoque.split(/(\d+)/);
  posicaoTorreAntesRoque = posicaoParaMatriz(
    posicaoTorreAntesRoque[0],
    posicaoTorreAntesRoque[1]
  );
  posicaoTorreAntesRoque[1] = posicaoTorreAntesRoque[1] - 4;

  let posicaoTorreDepoisRoque = selecionada.posicao;
  posicaoTorreDepoisRoque = posicaoTorreDepoisRoque.split(/(\d+)/);
  posicaoTorreDepoisRoque = posicaoParaMatriz(
    posicaoTorreDepoisRoque[0],
    posicaoTorreDepoisRoque[1]
  );
  posicaoTorreDepoisRoque[1] = posicaoTorreDepoisRoque[1] - 1;

  const quadradoAtacante = document.getElementById(
    matriz[posicaoTorreAntesRoque[0]][posicaoTorreAntesRoque[1]].posicao
  );
  const quadradoAlvo = document.getElementById(
    matriz[posicaoTorreDepoisRoque[0]][posicaoTorreDepoisRoque[1]].posicao
  );

  const imagemQuadradoAtacante = quadradoAtacante.querySelector("img");
  const imagemQuadradoAlvo = quadradoAlvo.querySelector("img");

  if (imagemQuadradoAlvo) {
    quadradoAlvo.replaceChild(
      imagemQuadradoAtacante.cloneNode(true),
      imagemQuadradoAlvo
    );
  } else {
    quadradoAlvo.appendChild(imagemQuadradoAtacante.cloneNode(true));
  }

  quadradoAtacante.removeChild(imagemQuadradoAtacante);

  let copiaTemporaria = {
    ...matriz[posicaoTorreAntesRoque[0]][posicaoTorreAntesRoque[1]],
  };

  copiaTemporaria.posicao =
    matriz[posicaoTorreDepoisRoque[0]][posicaoTorreDepoisRoque[1]].posicao;

  matriz[posicaoTorreDepoisRoque[0]][posicaoTorreDepoisRoque[1]] =
    copiaTemporaria;
  matriz[posicaoTorreDepoisRoque[0]][posicaoTorreDepoisRoque[1]].contador++;

  matriz[posicaoTorreAntesRoque[0]][posicaoTorreAntesRoque[1]].nome = "vazio";
  matriz[posicaoTorreAntesRoque[0]][posicaoTorreAntesRoque[1]].contador = 0;
  matriz[posicaoTorreAntesRoque[0]][posicaoTorreAntesRoque[1]].ameaca = [];
  matriz[posicaoTorreAntesRoque[0]][posicaoTorreAntesRoque[1]].movimento = [];
}

function atualizarAmeacas() {
  for (let j = 0; j < numeros.length; j++) {
    for (let i = 0; i < letras.length; i++) {
      if (listaPeoesPretos.includes(matriz[j][i].nome)) {
        ameacaPeoesPretos(letras[i], numeros[j], matriz[j][i]);
        movimentoPeoesPretos(letras[i], numeros[j], matriz[j][i]);
      }

      if (listaPeoesBrancos.includes(matriz[j][i].nome)) {
        ameacaPeoesBrancos(letras[i], numeros[j], matriz[j][i]);
        movimentoPeoesBrancos(letras[i], numeros[j], matriz[j][i]);
      }

      if (
        listaCavalosBrancos.includes(matriz[j][i].nome) ||
        listaCavalosPretos.includes(matriz[j][i].nome)
      ) {
        ameacaCavalos(letras[i], numeros[j], matriz[j][i]);
      }

      if (
        listaBisposBrancos.includes(matriz[j][i].nome) ||
        listaBisposPretos.includes(matriz[j][i].nome)
      ) {
        ameacaBispos(letras[i], numeros[j], matriz[j][i]);
      }

      if (
        listaTorresBrancas.includes(matriz[j][i].nome) ||
        listaTorresPretas.includes(matriz[j][i].nome)
      ) {
        ameacaTorres(letras[i], numeros[j], matriz[j][i]);
      }

      if (
        matriz[j][i].nome == "rainhaBranca" ||
        matriz[j][i].nome == "rainhaPreta"
      ) {
        ameacaRainhas(letras[i], numeros[j], matriz[j][i]);
      }

      if (matriz[j][i].nome == "reiBranco" || matriz[j][i].nome == "reiPreto") {
        ameacaReis(letras[i], numeros[j], matriz[j][i]);
      }
    }
  }
  listaAmeacasBrancas = [];
  listaAmeacasPretas = [];
  for (let j = 0; j < numeros.length; j++) {
    for (let i = 0; i < letras.length; i++) {
      if (listaPecasBrancas.includes(matriz[j][i].nome)) {
        listaAmeacasBrancas = listaAmeacasBrancas.concat(matriz[j][i].ameaca);
        listaAmeacasBrancas = [...new Set(listaAmeacasBrancas)];
      }
      if (listaPecasPretas.includes(matriz[j][i].nome)) {
        listaAmeacasPretas = listaAmeacasPretas.concat(matriz[j][i].ameaca);
        listaAmeacasPretas = [...new Set(listaAmeacasPretas)];
      }
    }
  }
}

function verificarXequeMate() {
  atualizarAmeacas();

  let copiaTabuleiro = JSON.parse(JSON.stringify(matriz));
  let xequeMate = 1;

  for (let a = 0; a < numeros.length; a++) {
    for (let b = 0; b < letras.length; b++) {
      if (
        matriz[a][b].nome == "reiBranco" &&
        listaAmeacasPretas.includes(matriz[a][b].posicao)
      ) {
        for (let j = 0; j < numeros.length; j++) {
          for (let i = 0; i < letras.length; i++) {
            if (listaPecasBrancas.includes(matriz[j][i].nome)) {
              for (let k = 0; k < matriz[j][i].ameaca.length; k++) {
                let posicaoPeca = matriz[j][i].posicao;
                posicaoPeca = posicaoPeca.split(/(\d+)/);
                posicaoPeca = posicaoParaMatriz(posicaoPeca[0], posicaoPeca[1]);

                let ameacaPeca = matriz[j][i].ameaca[k];
                let ameacaTemporaria = matriz[j][i].ameaca[k];
                ameacaPeca = ameacaPeca.split(/(\d+)/);
                ameacaPeca = posicaoParaMatriz(ameacaPeca[0], ameacaPeca[1]);

                // Condição para o Rei não conseguir comer peças aliadas para fugir
                if (
                  matriz[j][i].nome == "reiBranco" &&
                  listaPecasBrancas.includes(
                    matriz[ameacaPeca[0]][ameacaPeca[1]].nome
                  )
                ) {
                  continue;
                }
                if (
                  listaPeoesBrancos.includes(matriz[j][i].nome) &&
                  !listaPecasPretas.includes(
                    matriz[ameacaPeca[0]][ameacaPeca[1]].nome
                  )
                ) {
                  continue;
                }

                matriz[ameacaPeca[0]][ameacaPeca[1]] = JSON.parse(
                  JSON.stringify(matriz[posicaoPeca[0]][posicaoPeca[1]])
                );
                matriz[ameacaPeca[0]][ameacaPeca[1]].posicao = ameacaTemporaria;

                matriz[posicaoPeca[0]][posicaoPeca[1]].nome = "vazio";
                matriz[posicaoPeca[0]][posicaoPeca[1]].contador = 0;
                matriz[posicaoPeca[0]][posicaoPeca[1]].ameaca = [];
                matriz[posicaoPeca[0]][posicaoPeca[1]].movimento = [];

                atualizarAmeacas();

                for (let y = 0; y < numeros.length; y++) {
                  for (let z = 0; z < letras.length; z++) {
                    if (
                      matriz[y][z].nome == "reiBranco" &&
                      !listaAmeacasPretas.includes(matriz[y][z].posicao)
                    ) {
                      xequeMate = 0;
                    }
                  }
                }
                matriz = JSON.parse(JSON.stringify(copiaTabuleiro));
              }
              if (
                matriz[j][i].movimento &&
                listaPeoesBrancos.includes(matriz[j][i].nome)
              ) {
                for (let k = 0; k < matriz[j][i].movimento.length; k++) {
                  let posicaoPeca = matriz[j][i].posicao;
                  posicaoPeca = posicaoPeca.split(/(\d+)/);
                  posicaoPeca = posicaoParaMatriz(
                    posicaoPeca[0],
                    posicaoPeca[1]
                  );

                  let ameacaTemporaria = matriz[j][i].movimento[k];
                  let ameacaPeca = matriz[j][i].movimento[k];
                  ameacaPeca = ameacaPeca.split(/(\d+)/);
                  ameacaPeca = posicaoParaMatriz(ameacaPeca[0], ameacaPeca[1]);

                  matriz[ameacaPeca[0]][ameacaPeca[1]] = JSON.parse(
                    JSON.stringify(matriz[posicaoPeca[0]][posicaoPeca[1]])
                  );
                  matriz[ameacaPeca[0]][ameacaPeca[1]].posicao = ameacaTemporaria;

                  matriz[posicaoPeca[0]][posicaoPeca[1]].nome = "vazio";
                  matriz[posicaoPeca[0]][posicaoPeca[1]].contador = 0;
                  matriz[posicaoPeca[0]][posicaoPeca[1]].ameaca = [];
                  matriz[posicaoPeca[0]][posicaoPeca[1]].movimento = [];

                  atualizarAmeacas();

                  for (let y = 0; y < numeros.length; y++) {
                    for (let z = 0; z < letras.length; z++) {
                      if (
                        matriz[y][z].nome == "reiBranco" &&
                        !listaAmeacasPretas.includes(matriz[y][z].posicao)
                      ) {
                        xequeMate = 0;
                      }
                    }
                  }

                  matriz = JSON.parse(JSON.stringify(copiaTabuleiro));
                }
              }
            }
          }
        }
        if (xequeMate == 1) {
          let quadrado = document.getElementById("vitoriaDasPretas");
          quadrado.style.display = "block";
        }
      }
      xequeMate = 1;
      if (
        matriz[a][b].nome == "reiPreto" &&
        listaAmeacasBrancas.includes(matriz[a][b].posicao)
      ) {
        for (let j = 0; j < numeros.length; j++) {
          for (let i = 0; i < letras.length; i++) {
            if (listaPecasPretas.includes(matriz[j][i].nome)) {
              for (let k = 0; k < matriz[j][i].ameaca.length; k++) {
                let posicaoPeca = matriz[j][i].posicao;
                posicaoPeca = posicaoPeca.split(/(\d+)/);
                posicaoPeca = posicaoParaMatriz(posicaoPeca[0], posicaoPeca[1]);

                let ameacaPeca = matriz[j][i].ameaca[k];
                let ameacaTemporaria = matriz[j][i].ameaca[k];
                ameacaPeca = ameacaPeca.split(/(\d+)/);
                ameacaPeca = posicaoParaMatriz(ameacaPeca[0], ameacaPeca[1]);

                // Condição para o Rei não conseguir comer peças aliadas para fugir
                if (
                  matriz[j][i].nome == "reiPreto" &&
                  listaPecasPretas.includes(
                    matriz[ameacaPeca[0]][ameacaPeca[1]].nome
                  )
                ) {
                  continue;
                }
                if (
                  listaPeoesPretos.includes(matriz[j][i].nome) &&
                  !listaPecasBrancas.includes(
                    matriz[ameacaPeca[0]][ameacaPeca[1]].nome
                  )
                ) {
                  continue;
                }

                matriz[ameacaPeca[0]][ameacaPeca[1]] = JSON.parse(
                  JSON.stringify(matriz[posicaoPeca[0]][posicaoPeca[1]])
                );
                matriz[ameacaPeca[0]][ameacaPeca[1]].posicao = ameacaTemporaria;

                matriz[posicaoPeca[0]][posicaoPeca[1]].nome = "vazio";
                matriz[posicaoPeca[0]][posicaoPeca[1]].contador = 0;
                matriz[posicaoPeca[0]][posicaoPeca[1]].ameaca = [];
                matriz[posicaoPeca[0]][posicaoPeca[1]].movimento = [];

                atualizarAmeacas();

                for (let y = 0; y < numeros.length; y++) {
                  for (let z = 0; z < letras.length; z++) {
                    if (
                      matriz[y][z].nome == "reiPreto" &&
                      !listaAmeacasBrancas.includes(matriz[y][z].posicao)
                    ) {
                      xequeMate = 0;
                    }
                  }
                }
                matriz = JSON.parse(JSON.stringify(copiaTabuleiro));
              }
              if (
                matriz[j][i].movimento &&
                listaPeoesPretos.includes(matriz[j][i].nome)
              ) {
                for (let k = 0; k < matriz[j][i].movimento.length; k++) {
                  let posicaoPeca = matriz[j][i].posicao;
                  posicaoPeca = posicaoPeca.split(/(\d+)/);
                  posicaoPeca = posicaoParaMatriz(
                    posicaoPeca[0],
                    posicaoPeca[1]
                  );

                  let ameacaTemporaria = matriz[j][i].movimento[k];
                  let ameacaPeca = matriz[j][i].movimento[k];
                  ameacaPeca = ameacaPeca.split(/(\d+)/);
                  ameacaPeca = posicaoParaMatriz(ameacaPeca[0], ameacaPeca[1]);

                  matriz[ameacaPeca[0]][ameacaPeca[1]] = JSON.parse(
                    JSON.stringify(matriz[posicaoPeca[0]][posicaoPeca[1]])
                  );
                  matriz[ameacaPeca[0]][ameacaPeca[1]].posicao = ameacaTemporaria;

                  matriz[posicaoPeca[0]][posicaoPeca[1]].nome = "vazio";
                  matriz[posicaoPeca[0]][posicaoPeca[1]].contador = 0;
                  matriz[posicaoPeca[0]][posicaoPeca[1]].ameaca = [];
                  matriz[posicaoPeca[0]][posicaoPeca[1]].movimento = [];

                  atualizarAmeacas();

                  for (let y = 0; y < numeros.length; y++) {
                    for (let z = 0; z < letras.length; z++) {
                      if (
                        matriz[y][z].nome == "reiPreto" &&
                        !listaAmeacasBrancas.includes(matriz[y][z].posicao)
                      ) {
                        xequeMate = 0;
                      }
                    }
                  }
                  matriz = JSON.parse(JSON.stringify(copiaTabuleiro));
                }
              }
            }
          }
        }
        if (xequeMate == 1) {
          let quadrado = document.getElementById("vitoriaDasBrancas");
          quadrado.style.display = "block";
        }
      }
    }
  }
}

function reiEmPerigo(local, mover) {
  let copiaTabuleiro = JSON.parse(JSON.stringify(matriz));

  let localizacao = local.split(/(\d+)/);
  localizacao = posicaoParaMatriz(localizacao[0], localizacao[1]);

  let movimentacao = mover.split(/(\d+)/);
  movimentacao = posicaoParaMatriz(movimentacao[0], movimentacao[1]);

  matriz[movimentacao[0]][movimentacao[1]] = JSON.parse(JSON.stringify(matriz[localizacao[0]][localizacao[1]]));

  matriz[localizacao[0]][localizacao[1]].nome = 'vazio';
  matriz[movimentacao[0]][movimentacao[1]].posicao = mover;

  atualizarAmeacas();

  for (let j = 0; j < numeros.length; j++) {
    for (let i = 0; i < letras.length; i++) {
      if ( turnoBrancas == 1 ){
        if ( matriz[j][i].nome == 'reiBranco' && listaAmeacasPretas.includes(matriz[j][i].posicao) ){
          matriz = JSON.parse(JSON.stringify(copiaTabuleiro));
          atualizarAmeacas();
          return 1;
        }
      }
      if ( turnoPretas == 1 ){
        if ( matriz[j][i].nome == 'reiPreto' && listaAmeacasBrancas.includes(matriz[j][i].posicao) ){
          matriz = JSON.parse(JSON.stringify(copiaTabuleiro));
          atualizarAmeacas();
          return 2;
        }
      }
    }
  }
  matriz = JSON.parse(JSON.stringify(copiaTabuleiro));
  atualizarAmeacas();
  return 0;
}

function atualizarAmeacasSemRei() {
  for (let j = 0; j < numeros.length; j++) {
    for (let i = 0; i < letras.length; i++) {
      if (listaPeoesPretos.includes(matriz[j][i].nome)) {
        ameacaPeoesPretos(letras[i], numeros[j], matriz[j][i]);
        movimentoPeoesPretos(letras[i], numeros[j], matriz[j][i]);
      }

      if (listaPeoesBrancos.includes(matriz[j][i].nome)) {
        ameacaPeoesBrancos(letras[i], numeros[j], matriz[j][i]);
        movimentoPeoesBrancos(letras[i], numeros[j], matriz[j][i]);
      }

      if (
        listaCavalosBrancos.includes(matriz[j][i].nome) ||
        listaCavalosPretos.includes(matriz[j][i].nome)
      ) {
        ameacaCavalos(letras[i], numeros[j], matriz[j][i]);
      }

      if (
        listaBisposBrancos.includes(matriz[j][i].nome) ||
        listaBisposPretos.includes(matriz[j][i].nome)
      ) {
        ameacaBispos(letras[i], numeros[j], matriz[j][i]);
      }

      if (
        listaTorresBrancas.includes(matriz[j][i].nome) ||
        listaTorresPretas.includes(matriz[j][i].nome)
      ) {
        ameacaTorres(letras[i], numeros[j], matriz[j][i]);
      }

      if (
        matriz[j][i].nome == "rainhaBranca" ||
        matriz[j][i].nome == "rainhaPreta"
      ) {
        ameacaRainhas(letras[i], numeros[j], matriz[j][i]);
      }
    }
  }
  listaAmeacasBrancas = [];
  listaAmeacasPretas = [];
  for (let j = 0; j < numeros.length; j++) {
    for (let i = 0; i < letras.length; i++) {
      if (listaPecasBrancas.includes(matriz[j][i].nome)) {
        listaAmeacasBrancas = listaAmeacasBrancas.concat(matriz[j][i].ameaca);
        listaAmeacasBrancas = [...new Set(listaAmeacasBrancas)];
      }
      if (listaPecasPretas.includes(matriz[j][i].nome)) {
        listaAmeacasPretas = listaAmeacasPretas.concat(matriz[j][i].ameaca);
        listaAmeacasPretas = [...new Set(listaAmeacasPretas)];
      }
    }
  }
}

// DECLARANDO E VINCULANDO O CAMPO E AS PEÇAS AO HTML
const letras = ["A", "B", "C", "D", "E", "F", "G", "H"];
const numeros = ["8", "7", "6", "5", "4", "3", "2", "1"];

function distribuirPecas(){
  for (let j = 0; j < numeros.length; j++) {
    for (let i = 0; i < letras.length; i++) {
      // let A8 = document.getElementById("A8");
      window[letras[i] + numeros[j]] = document.getElementById(
        letras[i] + numeros[j]
      );
  
      // Identificando qual peça está na casa que foi clicada
      let peca = {};
      peca.contador = 0;
      if (letras[i] + numeros[j] == "A8") {
        peca.nome = "torrePreta1";
        peca.posicao = letras[i] + numeros[j];
        matriz[0][0] = peca;
      }
      if (letras[i] + numeros[j] == "H8") {
        peca.nome = "torrePreta2";
        peca.posicao = letras[i] + numeros[j];
        matriz[0][7] = peca;
      }
  
      if (letras[i] + numeros[j] == "B8") {
        peca.nome = "cavaloPreto1";
        peca.posicao = letras[i] + numeros[j];
        matriz[0][1] = peca;
      }
      if (letras[i] + numeros[j] == "G8") {
        peca.nome = "cavaloPreto2";
        peca.posicao = letras[i] + numeros[j];
        matriz[0][6] = peca;
      }
      if (letras[i] + numeros[j] == "C8") {
        peca.nome = "bispoPreto1";
        peca.posicao = letras[i] + numeros[j];
        matriz[0][2] = peca;
      }
      if (letras[i] + numeros[j] == "F8") {
        peca.nome = "bispoPreto2";
        peca.posicao = letras[i] + numeros[j];
        matriz[0][5] = peca;
      }
      if (letras[i] + numeros[j] == "D8") {
        peca.nome = "rainhaPreta";
        peca.posicao = letras[i] + numeros[j];
        matriz[0][3] = peca;
      }
      if (letras[i] + numeros[j] == "E8") {
        peca.nome = "reiPreto";
        peca.posicao = letras[i] + numeros[j];
        matriz[0][4] = peca;
      }
      if (letras[i] + numeros[j] == "A7") {
        peca.nome = "peaoPreto1";
        peca.posicao = letras[i] + numeros[j];
        matriz[1][0] = peca;
      }
      if (letras[i] + numeros[j] == "B7") {
        peca.nome = "peaoPreto2";
        peca.posicao = letras[i] + numeros[j];
        matriz[1][1] = peca;
      }
      if (letras[i] + numeros[j] == "C7") {
        peca.nome = "peaoPreto3";
        peca.posicao = letras[i] + numeros[j];
        matriz[1][2] = peca;
      }
      if (letras[i] + numeros[j] == "D7") {
        peca.nome = "peaoPreto4";
        peca.posicao = letras[i] + numeros[j];
        matriz[1][3] = peca;
      }
      if (letras[i] + numeros[j] == "E7") {
        peca.nome = "peaoPreto5";
        peca.posicao = letras[i] + numeros[j];
        matriz[1][4] = peca;
      }
      if (letras[i] + numeros[j] == "F7") {
        peca.nome = "peaoPreto6";
        peca.posicao = letras[i] + numeros[j];
        matriz[1][5] = peca;
      }
      if (letras[i] + numeros[j] == "G7") {
        peca.nome = "peaoPreto7";
        peca.posicao = letras[i] + numeros[j];
        matriz[1][6] = peca;
      }
      if (letras[i] + numeros[j] == "H7") {
        peca.nome = "peaoPreto8";
        peca.posicao = letras[i] + numeros[j];
        matriz[1][7] = peca;
      }
      if (listaVazia.includes(letras[i] + numeros[j])) {
        peca.nome = "vazio";
        peca.posicao = letras[i] + numeros[j];
        matriz[j][i] = peca;
      }
      if (letras[i] + numeros[j] == "A1") {
        peca.nome = "torreBranca1";
        peca.posicao = letras[i] + numeros[j];
        matriz[7][0] = peca;
      }
      if (letras[i] + numeros[j] == "H1") {
        peca.nome = "torreBranca2";
        peca.posicao = letras[i] + numeros[j];
        matriz[7][7] = peca;
      }
      if (letras[i] + numeros[j] == "B1") {
        peca.nome = "cavaloBranco1";
        peca.posicao = letras[i] + numeros[j];
        matriz[7][1] = peca;
      }
      if (letras[i] + numeros[j] == "G1") {
        peca.nome = "cavaloBranco2";
        peca.posicao = letras[i] + numeros[j];
        matriz[7][6] = peca;
      }
      if (letras[i] + numeros[j] == "C1") {
        peca.nome = "bispoBranco1";
        peca.posicao = letras[i] + numeros[j];
        matriz[7][2] = peca;
      }
      if (letras[i] + numeros[j] == "F1") {
        peca.nome = "bispoBranco2";
        peca.posicao = letras[i] + numeros[j];
        matriz[7][5] = peca;
      }
      if (letras[i] + numeros[j] == "D1") {
        peca.nome = "rainhaBranca";
        peca.posicao = letras[i] + numeros[j];
        matriz[7][3] = peca;
      }
      if (letras[i] + numeros[j] == "E1") {
        peca.nome = "reiBranco";
        peca.posicao = letras[i] + numeros[j];
        matriz[7][4] = peca;
      }
      if (letras[i] + numeros[j] == "A2") {
        peca.nome = "peaoBranco1";
        peca.posicao = letras[i] + numeros[j];
        matriz[6][0] = peca;
      }
      if (letras[i] + numeros[j] == "B2") {
        peca.nome = "peaoBranco2";
        peca.posicao = letras[i] + numeros[j];
        matriz[6][1] = peca;
      }
      if (letras[i] + numeros[j] == "C2") {
        peca.nome = "peaoBranco3";
        peca.posicao = letras[i] + numeros[j];
        matriz[6][2] = peca;
      }
      if (letras[i] + numeros[j] == "D2") {
        peca.nome = "peaoBranco4";
        peca.posicao = letras[i] + numeros[j];
        matriz[6][3] = peca;
      }
      if (letras[i] + numeros[j] == "E2") {
        peca.nome = "peaoBranco5";
        peca.posicao = letras[i] + numeros[j];
        matriz[6][4] = peca;
      }
      if (letras[i] + numeros[j] == "F2") {
        peca.nome = "peaoBranco6";
        peca.posicao = letras[i] + numeros[j];
        matriz[6][5] = peca;
      }
      if (letras[i] + numeros[j] == "G2") {
        peca.nome = "peaoBranco7";
        peca.posicao = letras[i] + numeros[j];
        matriz[6][6] = peca;
      }
      if (letras[i] + numeros[j] == "H2") {
        peca.nome = "peaoBranco8";
        peca.posicao = letras[i] + numeros[j];
        matriz[6][7] = peca;
      }
      window[letras[i] + numeros[j]].addEventListener("click", function () {
        evento(letras[i], numeros[j], matriz[j][i]);
      });
    }
  }
}
// Distribuindo Inicialmente as peças
distribuirPecas();

// Criando a lógica de Margem de Ameaça que cada peça tem
atualizarAmeacas();

function evento(letra, numero, peca) {
  //alert(JSON.stringify(peca));

  if (selecionouPeca == 0) {
    if (listaPecasBrancas.includes(peca.nome) && turnoBrancas == 1) {
      pecaSelecionada = {...peca};
      selecionouPeca = 1;

      // Sinalizando os movimentos e as ameaças dos peões brancos
      if (listaPeoesBrancos.includes(peca.nome)) {
        for (let i = 0; i < peca.movimento.length; i++) {
          let quadrado = document.getElementById(peca.movimento[i]);
          if (quadrado) {
            let perigo = reiEmPerigo(peca.posicao, peca.movimento[i]);
            if (perigo != 1) {
              quadrado.style.backgroundImage = "radial-gradient(circle, rgba(255, 255, 0, 0.5), rgba(255, 255, 255, 0))";
            }
          }
        }
        for (let i = 0; i < pecaSelecionada.ameaca.length; i++) {
          let quadrado = document.getElementById(pecaSelecionada.ameaca[i]);
          let imagemEncontrada = false;
          imagensPecasPretas.forEach((url) => {
            if (quadrado && quadrado.querySelector(`img[src="${url}"]`)) {
              imagemEncontrada = true;
            }
          });
          if (quadrado && imagemEncontrada) {
            let perigo = reiEmPerigo(peca.posicao, peca.ameaca[i]);
            if (perigo != 1) {
              quadrado.style.backgroundImage = "radial-gradient(circle, rgba(255, 0, 0, 0.5), rgba(255, 255, 255, 0))";
            }
          }
        }
        // En Passant
        let posicaoPeca = posicaoParaMatriz(letra, numero);
        if (
          listaPeoesPretos.includes(
            matriz[posicaoPeca[0]][posicaoPeca[1] - 1]?.nome
          ) &&
          matriz[posicaoPeca[0]][posicaoPeca[1] - 1].contador == 1 &&
          matriz[posicaoPeca[0]][posicaoPeca[1] - 1] == ultimaPecaQueAgiu &&
          posicaoPeca[0] == 3
        ) {
          let quadrado = document.getElementById(
            matriz[posicaoPeca[0] - 1][posicaoPeca[1] - 1].posicao
          );
          if (quadrado) {
            let perigo = reiEmPerigo(peca.posicao, matriz[posicaoPeca[0] - 1][posicaoPeca[1] - 1].posicao);
            if (perigo != 1) {
              quadrado.style.backgroundImage = "radial-gradient(circle, rgba(255, 0, 0, 0.5), rgba(255, 255, 255, 0))";
            }
          }
        }
        if (
          listaPeoesPretos.includes(
            matriz[posicaoPeca[0]][posicaoPeca[1] + 1]?.nome
          ) &&
          matriz[posicaoPeca[0]][posicaoPeca[1] + 1].contador == 1 &&
          matriz[posicaoPeca[0]][posicaoPeca[1] + 1] == ultimaPecaQueAgiu &&
          posicaoPeca[0] == 3
        ) {
          let quadrado = document.getElementById(
            matriz[posicaoPeca[0] - 1][posicaoPeca[1] + 1].posicao
          );
          if (quadrado) {
            let perigo = reiEmPerigo(peca.posicao, matriz[posicaoPeca[0] - 1][posicaoPeca[1] + 1].posicao);
            if (perigo != 1) {
              quadrado.style.backgroundImage = "radial-gradient(circle, rgba(255, 0, 0, 0.5), rgba(255, 255, 255, 0))";
            }
          }
        }
      }

      // Sinalizando os movimentos e as ameaças das peças brancas que não sejam os peões
      if (
        listaPecasBrancas.includes(peca.nome) &&
        !listaPeoesBrancos.includes(peca.nome)
      ) {
        for (let i = 0; i < pecaSelecionada.ameaca.length; i++) {
          let quadrado = document.getElementById(pecaSelecionada.ameaca[i]);
          let imagemEncontrada = true;
          imagensPecasBrancas.forEach((url) => {
            if (quadrado && quadrado.querySelector(`img[src="${url}"]`)) {
              imagemEncontrada = false;
            }
          });
          if (quadrado && imagemEncontrada) {
            let perigo = reiEmPerigo(peca.posicao, peca.ameaca[i]);
            if (perigo != 1) {
              quadrado.style.backgroundImage = "radial-gradient(circle, rgba(255, 255, 0, 0.5), rgba(255, 255, 255, 0))";
            }
          }
          imagemEncontrada = false;
          imagensPecasPretas.forEach((url) => {
            if (quadrado && quadrado.querySelector(`img[src="${url}"]`)) {
              imagemEncontrada = true;
            }
          });
          if (quadrado && imagemEncontrada) {
            let perigo = reiEmPerigo(peca.posicao, peca.ameaca[i]);
            if (perigo != 1) {
              quadrado.style.backgroundImage = "radial-gradient(circle, rgba(255, 0, 0, 0.5), rgba(255, 255, 255, 0))";
            }
          }
        }
      }
    }

    if (listaPecasPretas.includes(peca.nome) && turnoPretas == 1) {
      pecaSelecionada = {...peca};
      selecionouPeca = 1;

      // Sinalizando os movimentos e as ameaças dos peões pretos
      if (listaPeoesPretos.includes(peca.nome)) {
        for (let i = 0; i < peca.movimento.length; i++) {
          let quadrado = document.getElementById(peca.movimento[i]);
          if (quadrado) {
            let perigo = reiEmPerigo(peca.posicao, peca.movimento[i]);
            if (perigo != 2) {
              quadrado.style.backgroundImage = "radial-gradient(circle, rgba(255, 255, 0, 0.5), rgba(255, 255, 255, 0))";
            }
          }
        }
        for (let i = 0; i < pecaSelecionada.ameaca.length; i++) {
          let quadrado = document.getElementById(pecaSelecionada.ameaca[i]);
          let imagemEncontrada = false;
          imagensPecasBrancas.forEach((url) => {
            if (quadrado && quadrado.querySelector(`img[src="${url}"]`)) {
              imagemEncontrada = true;
            }
          });
          if (quadrado && imagemEncontrada) {
            let perigo = reiEmPerigo(peca.posicao, peca.ameaca[i]);
            if (perigo != 2) {
              quadrado.style.backgroundImage = "radial-gradient(circle, rgba(255, 0, 0, 0.5), rgba(255, 255, 255, 0))";
            }
          }
        }
        // En Passant
        let posicaoPeca = posicaoParaMatriz(letra, numero);
        if (
          listaPeoesBrancos.includes(
            matriz[posicaoPeca[0]][posicaoPeca[1] - 1]?.nome
          ) &&
          matriz[posicaoPeca[0]][posicaoPeca[1] - 1].contador == 1 &&
          matriz[posicaoPeca[0]][posicaoPeca[1] - 1] == ultimaPecaQueAgiu &&
          posicaoPeca[0] == 4
        ) {
          let quadrado = document.getElementById(
            matriz[posicaoPeca[0] + 1][posicaoPeca[1] - 1].posicao
          );
          if (quadrado) {
            let perigo = reiEmPerigo(peca.posicao, matriz[posicaoPeca[0] + 1][posicaoPeca[1] - 1].posicao);
            if (perigo != 2) {
              quadrado.style.backgroundImage = "radial-gradient(circle, rgba(255, 0, 0, 0.5), rgba(255, 255, 255, 0))";
            }
          }
        }
        if (
          listaPeoesBrancos.includes(
            matriz[posicaoPeca[0]][posicaoPeca[1] + 1]?.nome
          ) &&
          matriz[posicaoPeca[0]][posicaoPeca[1] + 1].contador == 1 &&
          matriz[posicaoPeca[0]][posicaoPeca[1] + 1] == ultimaPecaQueAgiu &&
          posicaoPeca[0] == 4
        ) {
          let quadrado = document.getElementById(
            matriz[posicaoPeca[0] + 1][posicaoPeca[1] + 1].posicao
          );
          if (quadrado) {
            let perigo = reiEmPerigo(peca.posicao, matriz[posicaoPeca[0] + 1][posicaoPeca[1] + 1].posicao);
            if (perigo != 2) {
              quadrado.style.backgroundImage = "radial-gradient(circle, rgba(255, 0, 0, 0.5), rgba(255, 255, 255, 0))";
            }
          }
        }
      }

      // Sinalizando os movimentos e as ameaças das peças Pretas que não sejam os peões
      if (
        listaPecasPretas.includes(peca.nome) &&
        !listaPeoesPretos.includes(peca.nome)
      ) {
        for (let i = 0; i < pecaSelecionada.ameaca.length; i++) {
          let quadrado = document.getElementById(pecaSelecionada.ameaca[i]);
          let imagemEncontrada = true;
          imagensPecasPretas.forEach((url) => {
            if (quadrado && quadrado.querySelector(`img[src="${url}"]`)) {
              imagemEncontrada = false;
            }
          });
          if (quadrado && imagemEncontrada) {
            let perigo = reiEmPerigo(peca.posicao, peca.ameaca[i]);
            if (perigo != 2) {
              quadrado.style.backgroundImage = "radial-gradient(circle, rgba(255, 255, 0, 0.5), rgba(255, 255, 255, 0))";
            }
          }
          imagemEncontrada = false;
          imagensPecasBrancas.forEach((url) => {
            if (quadrado && quadrado.querySelector(`img[src="${url}"]`)) {
              imagemEncontrada = true;
            }
          });
          if (quadrado && imagemEncontrada) {
            let perigo = reiEmPerigo(peca.posicao, peca.ameaca[i]);
            if (perigo != 2) {
              quadrado.style.backgroundImage = "radial-gradient(circle, rgba(255, 0, 0, 0.5), rgba(255, 255, 255, 0))";
            }
          }
        }
      }
    }
  } else if (selecionouPeca == 1) { // Seção que define pra onde a peça irá se Mover
    selecionouPeca = 0;
    let perigo = reiEmPerigo(pecaSelecionada.posicao, peca.posicao);

    for (let j = 0; j < numeros.length; j++) {
      for (let i = 0; i < letras.length; i++) {
        let quadrado = document.getElementById(letras[i] + numeros[j]);
        quadrado.style.backgroundImage = "radial-gradient(circle, rgba(255, 255, 0, 0), rgba(255, 255, 255, 0))";
      }
    }

    if (
      (turnoPretas == 1 && listaPecasPretas.includes(peca.nome)) ||
      (turnoBrancas == 1 && listaPecasBrancas.includes(peca.nome))
    ) {
      if (pecaSelecionada.posicao == peca.posicao) {
        return;
      }
      evento(letra, numero, peca);
    } else if (
      (pecaSelecionada.ameaca.includes(peca.posicao) || (pecaSelecionada.movimento && pecaSelecionada.movimento.includes(peca.posicao))) &&
      (( turnoBrancas == 1 && perigo != 1 ) || ( turnoPretas == 1 && perigo != 2 ))
    ) {
      // Criando uma condição que impede os peões de andarem nas diagonais sem peças para matarem
      // Mecânica do En Passant
      if (
        listaPeoesBrancos.includes(pecaSelecionada.nome) ||
        listaPeoesPretos.includes(pecaSelecionada.nome)
      ) {
        if (
          pecaSelecionada.ameaca.includes(peca.posicao) &&
          peca.nome == "vazio"
        ) {
          let posicaoClick = peca.posicao;
          posicaoClick = posicaoClick.split(/(\d+)/);
          posicaoClick = posicaoParaMatriz(posicaoClick[0], posicaoClick[1]);

          if (listaPeoesPretos.includes(matriz[posicaoClick[0] + 1][posicaoClick[1]]?.nome) &&
              matriz[posicaoClick[0] + 1][posicaoClick[1]].contador == 1 &&
              JSON.stringify(matriz[posicaoClick[0] + 1][posicaoClick[1]]) == JSON.stringify(ultimaPecaQueAgiu) &&
              posicaoClick[0] == 2 ){
                enPassant(letra, numero, pecaSelecionada);
          } else if (listaPeoesBrancos.includes(matriz[posicaoClick[0] - 1][posicaoClick[1]]?.nome) &&
              matriz[posicaoClick[0] - 1][posicaoClick[1]].contador == 1 &&
              JSON.stringify(matriz[posicaoClick[0] - 1][posicaoClick[1]]) == JSON.stringify(ultimaPecaQueAgiu) &&
              posicaoClick[0] == 5 ) {
                enPassant(letra, numero, pecaSelecionada);
          } else {
            verificarXequeMate();
            return;
          }
        }
      }

      // Identificando o movimento de ROQUE
      if (
        pecaSelecionada.nome == "reiBranco" ||
        pecaSelecionada.nome == "reiPreto"
      ) {
        let posicaoPeca = pecaSelecionada.posicao;
        posicaoPeca = posicaoPeca.split(/(\d+)/);
        posicaoPeca = posicaoParaMatriz(posicaoPeca[0], posicaoPeca[1]);

        let posicaoClick = peca.posicao;
        posicaoClick = posicaoClick.split(/(\d+)/);
        posicaoClick = posicaoParaMatriz(posicaoClick[0], posicaoClick[1]);

        if (
          matriz[posicaoPeca[0]][posicaoPeca[1] + 2] ==
          matriz[posicaoClick[0]][posicaoClick[1]]
        ) {
          roqueDireita(pecaSelecionada);
        }
        if (
          matriz[posicaoPeca[0]][posicaoPeca[1] - 2] ==
          matriz[posicaoClick[0]][posicaoClick[1]]
        ) {
          roqueEsquerda(pecaSelecionada);
        }
      }

      matarPeca(letra, numero, peca, pecaSelecionada.posicao);

      verificarXequeMate();

      ultimaPecaQueAgiu = posicaoParaMatriz(letra, numero);
      ultimaPecaQueAgiu = matriz[ultimaPecaQueAgiu[0]][ultimaPecaQueAgiu[1]];

      // Sistema de Promoção dos Peões
      for (let i = 0; i < 8; i++) {
        if (listaPeoesBrancos.includes(matriz[0][i].nome)) {
          let quadrado = document.getElementById("promocaoPecasBrancas");
          quadrado.style.display = "block";
          selecionouPeca = 2;
        }
        if (listaPeoesPretos.includes(matriz[7][i].nome)) {
          let quadrado = document.getElementById("promocaoPecasPretas");
          quadrado.style.display = "block";
          selecionouPeca = 2;
        }
      }

      // Trocando de Turno entre as Brancas e as Pretas
      if (turnoBrancas == 1) {
        turnoBrancas = 0;
        turnoPretas = 1;
      } else {
        turnoBrancas = 1;
        turnoPretas = 0;
      }
    }
  }
}
