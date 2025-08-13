// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
let amigo = document.getElementById("amigo").value;
let listaAmigos = document.getElementById("listaAmigos")

function agregarAmigo() {
  if (amigo != "") {
    amigos.push(amigo);
    console.log(amigos);
  } else {
    alert("Por favor, inserte un nombre.")
  }
}
