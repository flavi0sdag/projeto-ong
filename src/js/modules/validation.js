export function mascaraCPF(valor) {
    const numeros = valor
        .replace(/\D/g, "")
        .substring(0, 11);

    return numeros
        .replace(/^(\d{3})(\d)/, "$1.$2")
        .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/\.(\d{3})(\d)/, ".$1-$2");
}

export function mascaraTelefone(valor) {
    const numeros = valor
        .replace(/\D/g, "")
        .slice(0, 11);

    if (numeros.length <= 10) {
        return numeros
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{4})(\d)/, "$1-$2");
    }

    return numeros
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
}

export function mascaraCEP(valor) {
    return valor
        .replace(/\D/g, "")
        .slice(0, 8)
        .replace(/(\d{5})(\d)/, "$1-$2");
}

function cpfValido(cpf) {
    const numeros = cpf.replace(/\D/g, "");

    if (numeros.length !== 11) {
        return false;
    }

    if (/^(\d)\1{10}$/.test(numeros)) {
        return false;
    }

    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += Number(numeros[i]) * (10 - i);
    }

    let digito = (soma * 10) % 11;

    if (digito === 10) {
        digito = 0;
    }

    if (digito !== Number(numeros[9])) {
        return false;
    }

    soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += Number(numeros[i]) * (11 - i);
    }

    digito = (soma * 10) % 11;

    if (digito === 10) {
        digito = 0;
    }

    return digito === Number(numeros[10]);
}

function definirErro(campo, mensagem) {
    const erro = document.getElementById(`erro-${campo.id}`);

    campo.setAttribute("aria-invalid", "true");

    if (erro) {
        erro.textContent = mensagem;
    }
}

function removerErro(campo) {
    const erro = document.getElementById(`erro-${campo.id}`);

    campo.removeAttribute("aria-invalid");

    if (erro) {
        erro.textContent = "";
    }
}

export function validarFormulario(formulario) {
    let valido = true;

    const camposObrigatorios = [
        "nome",
        "email",
        "nascimento",
        "cpf",
        "telefone",
        "endereco",
        "cidade",
        "estado",
        "cep"
    ];

    camposObrigatorios.forEach((id) => {
        const campo = formulario.querySelector(`#${id}`);

        removerErro(campo);

        if (!campo.value.trim()) {
            definirErro(campo, "Este campo é obrigatório.");
            valido = false;
        }
    });

    const nome = formulario.querySelector("#nome");

    if (nome.value.trim() && nome.value.trim().length < 3) {
        definirErro(
            nome,
            "Informe um nome válido."
        );

        valido = false;
    }

    const email = formulario.querySelector("#email");

    if (
        email.value.trim() &&
        !email.validity.valid
    ) {
        definirErro(
            email,
            "Informe um e-mail válido."
        );

        valido = false;
    }

    const cpf = formulario.querySelector("#cpf");

    if (
        cpf.value.trim() &&
        !cpfValido(cpf.value)
    ) {
        definirErro(
            cpf,
            "Informe um CPF válido."
        );

        valido = false;
    }

    const telefone = formulario.querySelector("#telefone");
    const telefoneNumeros = telefone.value.replace(/\D/g, "");

    if (
        telefone.value.trim() &&
        telefoneNumeros.length < 10
    ) {
        definirErro(
            telefone,
            "Informe um telefone válido."
        );

        valido = false;
    }

    const cep = formulario.querySelector("#cep");
    const cepNumeros = cep.value.replace(/\D/g, "");

    if (
        cep.value.trim() &&
        cepNumeros.length !== 8
    ) {
        definirErro(
            cep,
            "Informe um CEP válido."
        );

        valido = false;
    }

    const estado = formulario.querySelector("#estado");

    if (
        estado.value.trim() &&
        estado.value.trim().length !== 2
    ) {
        definirErro(
            estado,
            "Informe a sigla do estado."
        );

        valido = false;
    }

    if (!valido) {
        const primeiroInvalido =
            formulario.querySelector('[aria-invalid="true"]');

        primeiroInvalido?.focus();
    }

    return valido;
}