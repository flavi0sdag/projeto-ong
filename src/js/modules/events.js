import {
    mascaraCPF,
    mascaraTelefone,
    mascaraCEP,
    validarFormulario
} from "./validation.js";

import {
    salvarCadastro
} from "./storage.js";

let ultimoElementoFocado = null;

function mostrarToast(mensagem) {
    const container =
        document.getElementById("toast-container");

    if (!container) {
        return;
    }

    const toast = document.createElement("section");

    toast.className = "toast";
    toast.setAttribute("role", "status");

    toast.textContent = mensagem;

    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 4000);
}

function abrirModal() {
    const modal = document.getElementById("modal");
    const titulo = document.getElementById("modal-titulo");
    const mensagem = document.getElementById("modal-mensagem");
    const botaoFechar = document.getElementById("fechar-modal");

    if (!modal) {
        return;
    }

    ultimoElementoFocado = document.activeElement;

    titulo.textContent = "Seja um voluntário";

    mensagem.textContent =
        "Obrigado pelo interesse em participar das ações do Instituto Esperança. Acesse a página de cadastro para continuar.";

    modal.hidden = false;

    document.body.classList.add("modal-aberto");

    botaoFechar.focus();
}

function fecharModal() {
    const modal = document.getElementById("modal");

    if (!modal || modal.hidden) {
        return;
    }

    modal.hidden = true;

    document.body.classList.remove("modal-aberto");

    ultimoElementoFocado?.focus();
}

function controlarFocoModal(evento) {
    const modal = document.getElementById("modal");

    if (
        evento.key !== "Tab" ||
        !modal ||
        modal.hidden
    ) {
        return;
    }

    const elementosFocaveis = [
        ...modal.querySelectorAll(
            'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
    ].filter((elemento) => !elemento.disabled);

    if (elementosFocaveis.length === 0) {
        evento.preventDefault();
        return;
    }

    const primeiro = elementosFocaveis[0];
    const ultimo = elementosFocaveis[elementosFocaveis.length - 1];

    if (
        evento.shiftKey &&
        document.activeElement === primeiro
    ) {
        evento.preventDefault();
        ultimo.focus();
        return;
    }

    if (
        !evento.shiftKey &&
        document.activeElement === ultimo
    ) {
        evento.preventDefault();
        primeiro.focus();
    }
}

function configurarMascaras() {
    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const cep = document.getElementById("cep");
    const estado = document.getElementById("estado");

    if (cpf) {
        cpf.addEventListener("input", (evento) => {
            evento.target.value = mascaraCPF(evento.target.value);
        });
    }

    if (telefone) {
        telefone.addEventListener("input", (evento) => {
            evento.target.value = mascaraTelefone(evento.target.value);
        });
    }

    if (cep) {
        cep.addEventListener("input", (evento) => {
            evento.target.value = mascaraCEP(evento.target.value);
        });
    }

    if (estado) {
        estado.addEventListener("input", (evento) => {
            evento.target.value = evento.target.value
                .replace(/[^a-zA-Z]/g, "")
                .slice(0, 2)
                .toUpperCase();
        });
    }
}

function configurarFormulario() {
    const formulario =
        document.getElementById("form-cadastro");

    if (!formulario) {
        return;
    }

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const feedback =
            document.getElementById("feedback-formulario");

        if (!validarFormulario(formulario)) {
            feedback.hidden = false;
            feedback.className =
                "alerta alerta-erro";

            feedback.textContent =
                "Verifique os campos destacados antes de enviar.";

            mostrarToast(
                "Existem campos que precisam ser corrigidos."
            );

            return;
        }

        const dados = Object.fromEntries(
            new FormData(formulario).entries()
        );

        salvarCadastro({
            ...dados,
            cadastradoEm: new Date().toISOString()
        });

        formulario.reset();

        feedback.hidden = false;
        feedback.className =
            "alerta alerta-sucesso";

        feedback.textContent =
            "Cadastro realizado com sucesso!";

        mostrarToast(
            "Cadastro realizado com sucesso."
        );
    });
}

function configurarPagina() {
    configurarMascaras();
    configurarFormulario();
}

function alternarMenu() {
    const navegacao = document.getElementById("menu-principal");
    const botao = document.getElementById("menu-toggle");

    if (!navegacao || !botao) {
        return;
    }

    const aberto = navegacao.classList.toggle("ativo");

    botao.setAttribute("aria-expanded", String(aberto));
    botao.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );
}

export function iniciarEventos() {
    document.addEventListener("pagina:carregada", configurarPagina);

    document.addEventListener("click", (evento) => {

        // Abre ou fecha o menu hambúrguer
        if (evento.target.closest("#menu-toggle")) {
            alternarMenu();
            return;
        }

        // Fecha o menu depois de escolher uma página
        if (evento.target.closest("#menu-principal a")) {
            const navegacao = document.getElementById("menu-principal");
            const botao = document.getElementById("menu-toggle");

            navegacao?.classList.remove("ativo");

            botao?.setAttribute("aria-expanded", "false");
            botao?.setAttribute("aria-label", "Abrir menu");
        }

        // Abre o modal de voluntariado
        if (evento.target.closest("#botao-voluntario")) {
            abrirModal();
        }

        // Fecha o modal pelo X
        if (evento.target.closest("#fechar-modal")) {
            fecharModal();
        }

        // Fecha o modal clicando no fundo
        const modal = document.getElementById("modal");

        if (
            modal &&
            !modal.hidden &&
            evento.target === modal
        ) {
            fecharModal();
        }
    });

    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape") {
            fecharModal();
            return;
        }

        controlarFocoModal(evento);
    });

    configurarPagina();
}