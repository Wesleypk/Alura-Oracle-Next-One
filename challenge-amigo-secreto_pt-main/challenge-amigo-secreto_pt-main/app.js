//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let amigos = [];
let amigoInput = document.getElementById("amigo");

amigos.length
function adicionarAmigo(){
    let valores = amigoInput.value;
    if (valores == "") {
        alert("Por favor insira um nome")
     } else
    amigos.push(valores);
    amigoInput.value = "";
}


function atualizarAmigos(){
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo =>{
    lista.innerHTML += `<li>${amigo}</li>`;
});
}
function sortearAmigo(){
    if (amigos.length === 0){
        alert("Adicione pelo menos um amigo antes de sortear!")}
    else{
    const sorteado = Math.floor(Math.random() * amigos.length);
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = `<p>O amigo sorteado é: ${amigos[sorteado]}</p>`;
}}




