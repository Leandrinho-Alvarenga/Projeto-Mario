/*
OBJETIVO 1 - quando o usuário clicar no botão de veja o trailer devemos abrir a modal com o video do trailer

OBEJETIVO 2 - quando o usuário clicar no x devemos fechar a modal 

OBEJETIVO 3 - quando o usuário clicar no botão de veja o tralier, devemos abrir a modal com o video do trailer 
     
OBJETIVO 1 - passo 1 - dar um jeito de pegar o elemento que reprensenta o botão na tela usando o js
      - passo 2 - dar um jeito de indentificar quando o usuário clicar no botão 
      - passo 3 - dar um jeito de pegar o elemento da modal no js 
      -passo 4 - abrir a modal na tela
        
OBJETIVO 2 - quando o usuário clicar no x devemos fechar a modal 
    - passo 1 - dar um jeito de pegar o elemento de fehcar modal usando js
    - passo 2 - dar um jeito de indentificar quando o usuário clicar no x 
    - passo 3 - fechar a modal
*/



//passo 1 - dar um jeito de pegar o elemento que reprensenta o botão na tela usando o js

const botaoTrailer = document.querySelector(".botao-trailer");
 const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

//passo 2 - dar um jeito de indentificar quando o usuário clicar no botão 

botaoTrailer.addEventListener("click", () => {
    console.log("clicou no botão veja o trailer");
    //passo 4 - abrir a modal na tela
   modal.classList.add("aberto");
   video.setAttribute("src",linkDoVideo);
})

// OBJETIVO 2 - quando o usuário clicar no x devemos fechar a modal 
// passo 1 - dar um jeito de pegar o elemento de fehcar modal usando js
const botaoFecharModal = document.querySelector(".fechar-modal");

// passo 2 - dar um jeito de indentificar quando o usuário clicar no x 
botaoFecharModal.addEventListener("click", () => {
    // passo 3 - fechar a modal
    modal.classList.remove("aberto");
    video.setAttribute("src", ""); 
})

