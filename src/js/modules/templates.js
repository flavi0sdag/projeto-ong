export function paginaInicial() {
    return `
        <section class="secao">
            <section class="container sobre-grid">

                <section class="sobre-conteudo">
                    <span class="badge badge-social">Ação Social</span>

                    <h1>Instituto Esperança</h1>

                    <h2>Sobre a ONG</h2>

                    <p>
                        O Instituto Esperança é uma organização sem fins lucrativos
                        dedicada a promover ações sociais e transformar vidas por
                        meio de projetos comunitários.
                    </p>
                </section>

                <section class="sobre-imagem">
                    <picture>
                        <source
                            srcset="/imagens/ong.webp"
                            type="image/webp"
                        >

                        <img
                            class="imagem-ong"
                            src="/imagens/ong.jpg"
                            alt="Voluntários do Instituto Esperança realizando uma ação social"
                            loading="lazy"
                            decoding="async"
                        >
                    </picture>
                </section>

            </section>
        </section>

        <section class="secao secao-destaque">
            <section class="container">
                <h2>Entre em contato</h2>

                <address class="contato">
                    <p>
                        <strong>E-mail:</strong>
                        contato@institutoesperanca.org
                    </p>

                    <p>
                        <strong>Telefone:</strong>
                        (54) 99999-9999
                    </p>

                    <p>
                        <strong>Endereço:</strong>
                        Rua da Esperança, 100 - Nova Petrópolis - RS
                    </p>
                </address>

                <a
                    href="/projetos"
                    class="botao"
                    data-link
                >
                    Conheça nossos projetos
                </a>
            </section>
        </section>
    `;
}

export function paginaProjetos() {
    return `
        <section class="secao projetos">
            <section class="container">

                <header class="projetos-cabecalho">
                    <h1>Projetos do Instituto Esperança</h1>
                    <p>
                        Conheça algumas formas de atuação do Instituto Esperança
                        e descubra como você pode contribuir com nossas ações.
                    </p>
                </header>

                <section class="projetos-grid">

                    <article class="projeto-card">
                        <span class="badge badge-social">
                            Ação Social
                        </span>

                        <h2>Projetos sociais</h2>

                        <p>
                            Desenvolvemos projetos voltados ao apoio da comunidade,
                            buscando promover melhores condições de vida e novas
                            oportunidades.
                        </p>
                    </article>

                    <article class="projeto-card">
                        <span class="badge badge-doacao">
                            Doação
                        </span>

                        <h2>Faça uma doação</h2>

                        <p>
                            As doações ajudam a manter nossas ações e possibilitam
                            a realização de novos projetos em benefício da comunidade.
                        </p>

                        <section
                            class="alerta alerta-info"
                            role="status"
                            aria-label="Informação sobre doações"
                        >
                            <strong>Como contribuir?</strong>
                            <p>
                                Entre em contato conosco para receber mais informações.
                            </p>
                        </section>
                    </article>

                    <article class="projeto-card">
                        <span class="badge badge-voluntario">
                            Voluntariado
                        </span>

                        <h2>Seja voluntário</h2>

                        <p>
                            Participe das atividades do Instituto Esperança e
                            colabore diretamente com nossos projetos sociais.
                        </p>

                        <button
                            type="button"
                            id="botao-voluntario"
                            class="botao"
                        >
                            Quero ser voluntário
                        </button>
                    </article>

                </section>

            </section>
        </section>
    `;
}

export function paginaCadastro() {
    return `
        <section class="secao">
            <section class="container formulario-container">
                <span class="badge badge-voluntario">
                    Voluntariado
                </span>

                <h1>Cadastro</h1>

                <h2>Cadastre-se para participar</h2>

                <p>
                    Preencha seus dados para demonstrar interesse em apoiar
                    as ações do Instituto Esperança.
                </p>

                <section class="alerta alerta-info" role="note">
                    <strong>Atenção:</strong>
                    este é um projeto acadêmico demonstrativo. Não insira dados pessoais reais.
                </section>

                <form id="form-cadastro" novalidate>
                    <fieldset>
                        <legend>Dados pessoais</legend>

                        <section class="campo">
                            <label for="nome">
                                Nome completo:
                            </label>

                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                autocomplete="name"
                                required
                                aria-describedby="erro-nome"
                            >

                            <small
                                class="erro"
                                id="erro-nome"
                            ></small>
                        </section>

                        <section class="campo">
                            <label for="email">
                                E-mail:
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                autocomplete="email"
                                required
                                aria-describedby="erro-email"
                            >

                            <small
                                class="erro"
                                id="erro-email"
                            ></small>
                        </section>

                        <section class="campo">
                            <label for="nascimento">
                                Data de nascimento:
                            </label>

                            <input
                                type="date"
                                id="nascimento"
                                name="nascimento"
                                autocomplete="bday"
                                required
                                aria-describedby="erro-nascimento"
                            >

                            <small
                                class="erro"
                                id="erro-nascimento"
                            ></small>
                        </section>

                        <section class="campo">
                            <label for="cpf">
                                CPF:
                            </label>

                            <input
                                type="text"
                                id="cpf"
                                name="cpf"
                                inputmode="numeric"
                                autocomplete="off"
                                maxlength="14"
                                placeholder="000.000.000-00"
                                required
                                aria-describedby="erro-cpf"
                            >

                            <small
                                class="erro"
                                id="erro-cpf"
                            ></small>
                        </section>
                    </fieldset>

                    <fieldset>
                        <legend>Contato e endereço</legend>

                        <section class="campo">
                            <label for="telefone">
                                Telefone:
                            </label>

                            <input
                                type="tel"
                                id="telefone"
                                name="telefone"
                                inputmode="tel"
                                autocomplete="tel"
                                maxlength="15"
                                placeholder="(54) 99999-9999"
                                required
                                aria-describedby="erro-telefone"
                            >

                            <small
                                class="erro"
                                id="erro-telefone"
                            ></small>
                        </section>

                        <section class="campo">
                            <label for="endereco">
                                Endereço:
                            </label>

                            <input
                                type="text"
                                id="endereco"
                                name="endereco"
                                autocomplete="street-address"
                                required
                                aria-describedby="erro-endereco"
                            >

                            <small
                                class="erro"
                                id="erro-endereco"
                            ></small>
                        </section>

                        <section class="campo">
                            <label for="cidade">
                                Cidade:
                            </label>

                            <input
                                type="text"
                                id="cidade"
                                name="cidade"
                                autocomplete="address-level2"
                                required
                                aria-describedby="erro-cidade"
                            >

                            <small
                                class="erro"
                                id="erro-cidade"
                            ></small>
                        </section>

                        <section class="campo">
                            <label for="estado">
                                Estado:
                            </label>

                            <input
                                type="text"
                                id="estado"
                                name="estado"
                                autocomplete="address-level1"
                                maxlength="2"
                                placeholder="RS"
                                required
                                aria-describedby="erro-estado"
                            >

                            <small
                                class="erro"
                                id="erro-estado"
                            ></small>
                        </section>

                        <section class="campo">
                            <label for="cep">
                                CEP:
                            </label>

                            <input
                                type="text"
                                id="cep"
                                name="cep"
                                inputmode="numeric"
                                autocomplete="postal-code"
                                maxlength="9"
                                placeholder="00000-000"
                                required
                                aria-describedby="erro-cep"
                            >

                            <small
                                class="erro"
                                id="erro-cep"
                            ></small>
                        </section>
                    </fieldset>

                    <section
                        id="feedback-formulario"
                        class="alerta"
                        role="status"
                        aria-live="polite"
                        hidden
                    ></section>

                    <button
                        type="submit"
                        class="botao"
                    >
                        Enviar cadastro
                    </button>
                </form>
            </section>
        </section>
    `;
}

export function paginaNaoEncontrada() {
    return `
        <section class="secao">
            <section class="container">
                <h1>Página não encontrada</h1>

                <p>
                    O endereço informado não corresponde a uma página
                    disponível no Instituto Esperança.
                </p>

                <a
                    href="/"
                    class="botao"
                    data-link
                >
                    Voltar ao início
                </a>
            </section>
        </section>
    `;
}