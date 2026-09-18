
function mostrarNome() {
    var nomeDigitado = document.getElementById("nome-pet").value;
    var paragrafo = document.getElementById("mensagem");

    paragrafo.textContent = "Parabéns! O seu mascote agora se chama " + nomeDigitado + "!";
}


function destacarMensagem() {
    var paragrafo = document.getElementById("mensagem");

    paragrafo.style.color = "green";
    paragrafo.style.fontSize = "24px";
}

var energia = 10;

function aumentar() {
    energia = energia + 1;
    document.getElementById("contador").textContent = energia;
}

function diminuir() {
    energia = energia - 1;
    document.getElementById("contador").textContent = energia;
}