import {
    paginaInicial,
    paginaProjetos,
    paginaCadastro,
    paginaNaoEncontrada
} from "./templates.js";

const rotas = {
    "/": paginaInicial,
    "/projetos": paginaProjetos,
    "/cadastro": paginaCadastro
};

export function renderizarRota() {
    const app = document.getElementById("app");

    const caminho = window.location.pathname;
    const pagina = rotas[caminho] || paginaNaoEncontrada;

    app.innerHTML = pagina();

    document.dispatchEvent(
        new CustomEvent("pagina:carregada")
    );
}

export function iniciarRouter() {
    renderizarRota();

    document.addEventListener("click", (evento) => {
        const link = evento.target.closest("a[data-link]");

        if (!link) return;

        evento.preventDefault();

        const destino = link.getAttribute("href");

        window.history.pushState({}, "", destino);

        renderizarRota();
    });

    window.addEventListener("popstate", () => {
        renderizarRota();
    });
}