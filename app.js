const inputItem = document.getElementById("input-item"); // Encontra no HTML um elemento específico a partir do seu ID.
const botaoAdd = document.getElementById("adicionar-item");
const toDoList = document.getElementById("lista-de-compras");

let contador = 0; // Faz o controle do número de itens criados.

botaoAdd.addEventListener("click",  (evento) => {
    evento.preventDefault(); // Impede que o comportamento padrão do evento aconteça. Por exemplo, impede que um link abra uma nova página.
    console.log(inputItem.value); // A partir do click capturado, envia pro console o valor capturado do form.

    if (inputItem.value == "") {
        alert("Campo vazio!"); // Alert é usado para criar um pop up com uma mensagem no navegador.
        return // O return interrompe a execução e retorna ou não um valor chamado pela função. Return só é usado em functions, e o break só em loops.
    }

    const itemDaLista = document.createElement("li"); // Cria um novo item de lista
    const containerItemDalista = document.createElement("div"); // Cria uma div e à atribui a essa variável.
    containerItemDalista.classList.add("list__item"); // Adiciona uma classe para a div criada acima.

    const inputCheckbox = document.createElement("input"); // Acessa o documento e cria um elemento input.
    inputCheckbox.type = "checkbox"; // Adiciona a esse elemento um tipo específico.
    inputCheckbox.id = "checkbox-" + contador++; // Modificao ID do elemento a partir do contador.

    const listTarefa = document.createElement("p"); // Acessa o documento e cria um elemento <p>.
    listTarefa.innerText = inputItem.value; // Atribui a esse elemento o valor recuperado da variável da barra de digitação.

    containerItemDalista.appendChild(inputCheckbox); // Adiciona o checkbox dentro da div criada.
    containerItemDalista.appendChild(listTarefa); // Adiciona o parágrafo dentro da div criada.

    itemDaLista.appendChild(containerItemDalista); // Adiciona a div criada (e seus filhos) dentro do elemento "li" criado.

    const diaDaSemana = new Date().toLocaleDateString("pt-BR", {weekday: "long"});
    const diaMesAno = new Date().toLocaleDateString("pt-BR")
    const horaInfo = new Date().toLocaleTimeString("pt-BR", {hour: "numeric", minute: "numeric"});
    const dataCompleta = `${diaDaSemana}, ${diaMesAno}, às ${horaInfo}`;
    
    const horaParagrafo = document.createElement("p")
    horaParagrafo.innerHTML = dataCompleta;
    itemDaLista.appendChild(horaParagrafo);

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