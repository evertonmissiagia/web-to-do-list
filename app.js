const inputItem = document.getElementById("input-item"); // Encontra no HTML um elemento específico a partir do seu ID.
const botaoAdd = document.getElementById("adicionar-item");

botaoAdd.addEventListener("click", (evento) => {
    evento.preventDefault(); // Impede que o comportamento padrão do evento aconteça. Por exemplo, impede que um link abra uma nova página.
    console.log(inputItem.value); // A partir do click capturado, envia pro console o valor capturado do form.

    if (inputItem.value == "") {
        alert("Campo vazio!"); // Alert é usado para criar um pop up com uma mensagem no navegador.
        return // O return interrompe a execução e retorna ou não um valor chamado pela função. Return só é usado em functions, e o break só em loops.
    }

    const itemDaLista = document.createElement("li");
    const containerItemDalista = document.createElement("div")
    containerItemDalista.classList.add("main__form__list__item")
});