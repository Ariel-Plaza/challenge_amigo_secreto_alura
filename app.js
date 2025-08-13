// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
// let amigo = document.getElementById("amigo").value;
let listaAmigos = document.getElementById("listaAmigos")

function agregarAmigo() {
  let amigo = document.getElementById("amigo");
  if (amigo.value != "") {
    amigos.push(amigo.value);
    amigo.value = "";
  } else {
    alert("Por favor, inserte un nombre.");
  }
  lista = ""
  for (let i = 0; i < amigos.length; i++) {
    lista += `<li>${amigos[i]}`
  }
  listaAmigos.innerHTML = lista;
}
