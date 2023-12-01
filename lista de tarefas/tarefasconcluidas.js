const tarefaFeita = document.createElement("script");
tarefaFeita.src = "java.js";
document.head.appendChild(tarefaFeita);

// A função monta o esqueleto HTML com cada valor da array "tarefasConcluidas"
function mostrarTarefasConcluidas() {
    let liConcluida = "";

    tarefasConcluidas.forEach((item, posicao) => {
        liConcluida += `

            <li>
                <p>${item}</p>
                <div>
                    <svg onclick="desconcluir(${posicao})" class="lixeira" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                    <svg onclick="deletarConclusao(${posicao})" class="lixeira" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg>
                </div>
            </li>

        `;
    });

    // Os lis serão adicionados na ul do HTML
    ulConcluida.innerHTML = liConcluida;

    // Salva as tarefas em armazenamento local
    localStorage.setItem("listaConcluida", JSON.stringify(tarefasConcluidas));
}

function desconcluir(posicao) {
    listaDeTarefas.push(tarefasConcluidas.splice(posicao, 1));

    mostrarTarefas();
    mostrarTarefasConcluidas();
}

// A função retira a tarefa da array "tarefasConcluidas"
function deletarConclusao(posicao) {
    tarefasConcluidas.splice(posicao, 1);
    mostrarTarefasConcluidas();
};