
// =========================
// SAUDAÇÃO DINÂMICA
// =========================

const saudacao = document.getElementById("saudacao");
const horaAtual = new Date().getHours();

if (saudacao) {
  if (horaAtual >= 5 && horaAtual < 12) {
    saudacao.textContent = "Bom dia, seja bem-vindo!";
  } else if (horaAtual >= 12 && horaAtual < 18) {
    saudacao.textContent = "Boa tarde, seja bem-vindo!";
  } else {
    saudacao.textContent = "Boa noite, seja bem-vindo!";
  }
}

// =========================
// MENU HAMBÚRGUER
// =========================

const menuBotao = document.getElementById("menu-botao");
const menu = document.getElementById("menu");

if (menuBotao && menu) {
  menuBotao.addEventListener("click", () => {
    const estaAberto = menu.classList.toggle("aberto");

    menuBotao.setAttribute("aria-expanded", String(estaAberto));
    menuBotao.setAttribute(
      "aria-label",
      estaAberto ? "Fechar menu" : "Abrir menu"
    );
  });

  // Fecha o menu depois que um link é selecionado.
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("aberto");
      menuBotao.setAttribute("aria-expanded", "false");
      menuBotao.setAttribute("aria-label", "Abrir menu");
    });
  });

  // Fecha o menu com a tecla Escape.
  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
      menu.classList.remove("aberto");
      menuBotao.setAttribute("aria-expanded", "false");
      menuBotao.setAttribute("aria-label", "Abrir menu");
    }
  });
}

// =========================
// TEMA CLARO E ESCURO
// =========================

const temaBotao = document.getElementById("tema-botao");

if (temaBotao) {
  temaBotao.addEventListener("click", () => {
    const temaClaroAtivo = document.body.classList.toggle("tema-claro");

    temaBotao.textContent = temaClaroAtivo ? "☾" : "☼";
    temaBotao.setAttribute(
      "aria-label",
      temaClaroAtivo ? "Ativar tema escuro" : "Ativar tema claro"
    );
    temaBotao.setAttribute(
      "title",
      temaClaroAtivo ? "Ativar tema escuro" : "Ativar tema claro"
    );
  });
}

// =========================
// ANO AUTOMÁTICO NO RODAPÉ
// =========================

const anoAtual = document.getElementById("ano-atual");

if (anoAtual) {
  anoAtual.textContent = new Date().getFullYear();
}

// =========================
// VALIDAÇÃO DO FORMULÁRIO
// =========================

const formulario = document.getElementById("formulario");

if (formulario) {
  const campoNome = document.getElementById("nome");
  const campoEmail = document.getElementById("email");
  const campoMensagem = document.getElementById("mensagem");
  const campoConsentimento = document.getElementById("consentimento");
  const mensagemSucesso = document.getElementById("mensagem-sucesso");

  const erros = {
    nome: document.getElementById("erro-nome"),
    email: document.getElementById("erro-email"),
    mensagem: document.getElementById("erro-mensagem"),
    consentimento: document.getElementById("erro-consentimento")
  };

  // Limpa o erro visual de um campo.
  function limparErro(campo, elementoErro) {
    elementoErro.textContent = "";
    campo.classList.remove("invalido");
    campo.removeAttribute("aria-invalid");
  }

  // Mostra o erro e indica o campo inválido.
  function mostrarErro(campo, elementoErro, texto) {
    elementoErro.textContent = texto;
    campo.classList.add("invalido");
    campo.setAttribute("aria-invalid", "true");
  }

  // Verifica se o e-mail tem formato básico válido.
  function emailValido(email) {
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return formatoEmail.test(email);
  }

  // Valida os dados quando o formulário é enviado.
  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    mensagemSucesso.textContent = "";

    Object.keys(erros).forEach((chave) => {
      erros[chave].textContent = "";
    });

    [campoNome, campoEmail, campoMensagem].forEach((campo) => {
      campo.classList.remove("invalido");
      campo.removeAttribute("aria-invalid");
    });

    let formularioValido = true;
    let primeiroCampoInvalido = null;

    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();
    const mensagem = campoMensagem.value.trim();

    // Validação do nome.
    if (nome.length < 2) {
      mostrarErro(
        campoNome,
        erros.nome,
        "Digite seu nome com pelo menos 2 caracteres."
      );

      formularioValido = false;
      primeiroCampoInvalido ??= campoNome;
    }

    // Validação do e-mail.
    if (!emailValido(email)) {
      mostrarErro(
        campoEmail,
        erros.email,
        "Digite um e-mail válido, contendo @ e um domínio."
      );

      formularioValido = false;
      primeiroCampoInvalido ??= campoEmail;
    }

    // Validação da mensagem.
    if (mensagem.length < 20) {
      mostrarErro(
        campoMensagem,
        erros.mensagem,
        "Sua mensagem precisa ter pelo menos 20 caracteres."
      );

      formularioValido = false;
      primeiroCampoInvalido ??= campoMensagem;
    }

    // Validação do consentimento.
    if (!campoConsentimento.checked) {
      erros.consentimento.textContent =
        "Marque a caixa para confirmar que revisou as informações.";

      campoConsentimento.setAttribute("aria-invalid", "true");

      formularioValido = false;
      primeiroCampoInvalido ??= campoConsentimento;
    } else {
      erros.consentimento.textContent = "";
      campoConsentimento.removeAttribute("aria-invalid");
    }

    // Se houver erro, leva o foco ao primeiro campo inválido.
    if (!formularioValido) {
      primeiroCampoInvalido?.focus();
      return;
    }

    // O formulário é demonstrativo e não envia dados para um servidor.
    mensagemSucesso.textContent =
      `Tudo certo, ${nome}! Os campos foram validados com sucesso. ` +
      "Este formulário é uma demonstração e não envia mensagens.";

    formulario.reset();

    [campoNome, campoEmail, campoMensagem].forEach((campo) => {
      campo.classList.remove("invalido");
      campo.removeAttribute("aria-invalid");
    });

    campoConsentimento.removeAttribute("aria-invalid");
    mensagemSucesso.focus();
  });

  // Remove os erros enquanto a pessoa corrige os campos.
  campoNome.addEventListener("input", () => {
    limparErro(campoNome, erros.nome);
  });

  campoEmail.addEventListener("input", () => {
    limparErro(campoEmail, erros.email);
  });

  campoMensagem.addEventListener("input", () => {
    limparErro(campoMensagem, erros.mensagem);
  });

  campoConsentimento.addEventListener("change", () => {
    erros.consentimento.textContent = "";
    campoConsentimento.removeAttribute("aria-invalid");
  });
}
