var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");


function criptografar() {

  var texto = textInput.value;

  var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "index").replace(/a/g, "link").replace(/o/g, "over").replace(/u/g, "meta")


  document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultCripto +
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar() {

  var texto = textInput.value;

  var resultDescripto = texto.replace(/enter/g, "e").replace(/index/g, "i").replace(/link/g, "a").replace(/over/g, "o").replace(/meta/g, "u");

  document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultDescripto +
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
  var textoCop = document.getElementById('input-texto');

  textoCop.select();
  document.execCommand('copy');
  alert("Texto copiado.");
}  