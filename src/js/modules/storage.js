const CHAVE_CADASTROS = "instituto-esperanca-cadastros";

export function obterCadastros() {
    const dados = localStorage.getItem(CHAVE_CADASTROS);

    if (!dados) {
        return [];
    }

    try {
        return JSON.parse(dados);
    } catch {
        return [];
    }
}

export function salvarCadastro(cadastro) {
    const cadastros = obterCadastros();

    cadastros.push(cadastro);

    localStorage.setItem(
        CHAVE_CADASTROS,
        JSON.stringify(cadastros)
    );
}