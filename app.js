// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
// let amigo = document.getElementById("amigo").value;
let listaAmigos = document.getElementById("listaAmigos")

function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;  
  console.log(amigo)
  if (amigo != "") {
    amigos.push(amigo);
  } else {
    alert("Por favor, inserte un nombre.");
  }
  lista = ""
  for (let i = 0; i < amigos.length; i++) {
    lista += `<li>${amigos[i]}`
  }
  listaAmigos.innerHTML = lista;
}
console.log(amigos)

function sortearAmigo() {
  if (amigos.length > 1) {
    console.log(amigos.length)
    let ganador = Math.floor(Math.random()* amigos.length);
    console.log(ganador);
    console.log("El amigo sorteado es: " + amigos[ganador]);
    listaAmigos.innerHTML = `<li class="result-list">El amigo secreto sorteado es: ${amigos[ganador]}</li>`
    amigos = []
  } else {
    alert("No existen amigos para realizar el sorteo");
  }
  listaAmigos.innerHTML = ``
}