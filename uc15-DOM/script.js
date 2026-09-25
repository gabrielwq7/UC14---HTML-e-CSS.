let tarefas = [];

let totaltarefas = 0;
let totalconcluidas = 0;


function adicionarTarefa() {
    let nome = document.getElementById("nome").value.trim();
    let materia = document.getElementById("materia").value.trim();
    let prioridade = document.getElementById("prioridade").value.trim();
    let mensagem = document.getElementById("mensagem");

    if (nome === "" || materia === "" || prioridade === "") {
    
        mensagem.textContent = "Por favor, preencha todos os campos.";
        mensagem.style.color = "red";
        return;
    }
}
    let duplicado = tarefas.some(function(tarefa) {
        return tarefa.nome.toLowerCase() === nome.toLowerCase();
    });

    if (duplicado) {
        mensagem.textContent = "Essa tarefa já foi adicionada.";
        mensagem.style.color = "red";
        return;
    }

    let novaTarefa = {
        nome: nome,
        materia: materia,
        prioridade: prioridade,
        concluida: false
    };

        tarefas.push(novaTarefa);
        totaltarefas++;
        mensagem.textContent = "Tarefa cadastrada com sucesso!";
        mensagem.style.color = "green";
        exibirTarefas();
        exibirTotais();
        limparCampos();
          

    function exibirTarefas() {
    let listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.textContent = "";

    tarefas.forEach(function(tarefa, indice) {
        let card = document.createElement("div");
        card.className = "tarefa";

        let titulo = document.createElement("h3");
        titulo.textContent = tarefa.nome;

        let materiaEl = document.createElement("p");
        materiaEl.textContent = "Matéria: " + tarefa.materia;

        let prioridadeEl = document.createElement("p");
        prioridadeEl.textContent = "Prioridade: " + tarefa.prioridade;

    let status = document.createElement("p");
    status.textContent = tarefa.concluida
        ? "Status: Concluída"
        : "Status: Pendente";
    
    })
}

card.appendChild(titulo);
card.appendChild(materia);
card.appendChild(prioridade);
card.appendChild(status);
  

destaqueprioridade(tarefa.prioridade, card);

if (tarefa.concluida) {
    card.classList.add("concluida");
} else {
    let botão = document.createElement("button");
    botão.textContent = "Concluir";
    
     botao.click = function() {
        concluirTarefa(indice);
    };
    card.appendChild(botao);
}
lista.appendChild(card);

function destacarprioridade(prioridade, card) {
    if (prioridade === "Alta") {
        card.style.borderLeft = "5px solid red";
    } else if (prioridade === "Média") {
        card.style.borderLeft = "5px solid orange";
    } else if (prioridade === "Baixa") {
        card.style.borderLeft = "5px solid green";
    }
}

function destacarprioridade(prioridade, card) {
    if (prioridade === "Alta") {
        card.style.borderLeft = "5px solid red";
    } else if (prioridade === "Média") {
        card.style.borderLeft = "5px solid orange";
    } else if (prioridade === "Baixa") {
        card.style.borderLeft = "5px solid green";
    }
}

function concluirTarefa(indice) {
    let tarefa = tarefas[indice];
    if (!tarefa.concluida) {
        return;
       }

    tarefa.concluida = true;
    totalconcluidas++;

    let mensagem = document.getElementById("mensagem");
    mensagem.textContent = "Tarefa concluída com sucesso!";
    mensagem.style.color = "green";

    atualizarcontadores(0);
    exibirTarefas();
}

function atualizarContadores() {
    document.getElementById("contador").textContent =
    "tarefas cadastrados: " + totaltarefas;
   document.getElementById("contadorConcluidas").textContent =
    "tarefas concluídas: " + totalconcluidas;
}


function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("materia").value = "";
    document.getElementById("prioridade").value = "";
}

function alternarmodo() {
    document.body.classList.toggle("modo-concetracao");
}



