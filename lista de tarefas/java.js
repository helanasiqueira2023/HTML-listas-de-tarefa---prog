// Criar variáveis do HTML no JS
let botao = document.querySelector("#botao");
let input = document.querySelector("#input");
let ul = document.querySelector("#ul");
let ulConcluida = document.querySelector("#ul-concluida");

let listaDeTarefas = [];
let tarefasConcluidas = [];

// Quando o botão for clicado a função é executada
botao.addEventListener("click", function () {

    // A função adiciona o valor do input na array "listaDeTarefas"
    if (!input.value) {}
    else {
        listaDeTarefas.push(input.value);

        input.value = "";

        mostrarTarefas();
    };
});

// A função monta o esqueleto HTML com cada valor da array "listaDeTarefas"
function mostrarTarefas() {
    let li = "";

    listaDeTarefas.forEach((item, posicao) => {
        li += `

            <li>
                <p>${item}</p>
                <div>
                    <svg onclick="concluir(${posicao})" class="check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
                        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                    </svg>
                    <svg onclick="deletar(${posicao})" class="lixeira" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg>
                </div>
            </li>

        `;
    });

    // Os lis serão adicionados na ul do HTML
    ul.innerHTML = li;

    // Salva as tarefas em armazenamento local
    localStorage.setItem("lista", JSON.stringify(listaDeTarefas));
};

// A função retira e coloca a tarefa em outra array
function concluir(posicao) {
    tarefasConcluidas.push(listaDeTarefas.splice(posicao, 1));

    mostrarTarefas();
    mostrarTarefasConcluidas();
}

// A função retira a tarefa da array "listaDeTarefas"
function deletar(posicao) {
    listaDeTarefas.splice(posicao, 1);
    mostrarTarefas();
};

// Quando recarregar a página, as tarefas não serão perdidas
function recarregar() {
    let tarefasLocalStorage = localStorage.getItem("lista");
    let tarefasConcluidasLocalStorage = localStorage.getItem("listaConcluida");

    if (tarefasLocalStorage) listaDeTarefas = JSON.parse(tarefasLocalStorage);
    if (tarefasConcluidasLocalStorage) tarefasConcluidas = JSON.parse(tarefasConcluidasLocalStorage);

    mostrarTarefas();
    mostrarTarefasConcluidas();
}

recarregar();