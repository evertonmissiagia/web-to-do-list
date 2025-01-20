import { criarItemLista } from "./scripts/criarItemLista.js";

const botaoAdd = document.getElementById("adicionar-item");
const toDoList = document.getElementById("lista-de-compras");

let contador = 0; // Faz o controle do número de itens criados.

botaoAdd.addEventListener("click",  (evento) => {
    toDoList.appendChild(itemDaLista); // Adiciona o item de lista com todos os filhos à lista principal.

inputCheckbox.addEventListener("click", function (){
    if (inputCheckbox.checked) {
        listTarefa.style.textDecoration = "line-through";
        horaParagrafo.style.textDecoration = "line-through"
        } else {
            listTarefa.style.textDecoration = "none";
            horaParagrafo.style.textDecoration = "none";
        }
    }
);

});