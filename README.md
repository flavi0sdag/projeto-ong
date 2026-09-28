# Instituto Esperança

Projeto acadêmico desenvolvido para a disciplina de Desenvolvimento Front-end do curso de Engenharia de Software.

O projeto consiste em uma aplicação web para a ONG fictícia **Instituto Esperança**, apresentando informações institucionais, projetos sociais, formas de participação e um formulário de cadastro.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Vite
- Git
- GitHub
- LocalStorage

## Funcionalidades

- Aplicação no formato SPA (Single Page Application)
- Navegação entre páginas sem recarregamento completo
- Menu responsivo com versão hambúrguer
- Layout responsivo para desktop e dispositivos móveis
- Formulário de cadastro
- Máscaras para CPF, telefone e CEP
- Validação dos campos do formulário
- Persistência demonstrativa utilizando LocalStorage
- Badges para categorização dos projetos
- Alertas, toast e modal
- Navegação por teclado
- Controle de foco no modal
- Feedback visual de erros e sucesso

> Este é um projeto acadêmico demonstrativo. Não devem ser inseridos dados pessoais reais no formulário.

## Estrutura do projeto

```text
projeto-ong-final/
├── public/
│   └── imagens/
│       ├── ong.jpg
│       └── ong.webp
├── src/
│   ├── css/
│   │   ├── reset.css
│   │   └── style.css
│   └── js/
│       ├── main.js
│       └── modules/
│           ├── events.js
│           ├── router.js
│           ├── storage.js
│           ├── templates.js
│           └── validation.js
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## Como executar o projeto

É necessário possuir Node.js e npm instalados.

Clone o repositório e acesse a pasta do projeto:

```bash
git clone https://github.com/flavi0sdag/projeto-ong.git
cd projeto-ong
```

Instale as dependências:

```bash
npm install
```

Execute o ambiente de desenvolvimento:

```bash
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

Para testar o build localmente:

```bash
npm run preview
```

## Acessibilidade

O projeto foi desenvolvido considerando práticas de acessibilidade e as recomendações da WCAG 2.1 AA.

Entre as medidas implementadas estão:

- HTML semântico
- textos alternativos em imagens
- labels associados aos campos do formulário
- foco visível
- navegação por teclado
- skip link para o conteúdo principal
- atributos ARIA quando necessários
- controle de foco no modal
- suporte à preferência por redução de movimento
- contraste adequado entre texto e fundo

## Responsividade

A interface utiliza CSS Grid e Flexbox para adaptação a diferentes tamanhos de tela.

Em dispositivos menores, o menu principal é substituído por um menu hambúrguer e os conteúdos organizados em colunas passam para uma única coluna.

## Otimização

O projeto utiliza Vite para desenvolvimento e geração do build de produção.

A imagem principal foi convertida de JPEG para WebP:

- JPEG: 184 KB
- WebP: 98 KB
- Redução aproximada: 46,7%

A aplicação utiliza WebP como formato principal e JPEG como fallback.

O build de produção gerado pelo Vite apresentou:

- HTML: 2,94 KB
- CSS: 7,74 KB
- JavaScript: 20,93 KB

Também são utilizados carregamento tardio (`loading="lazy"`) e decodificação assíncrona da imagem.

## Versionamento

O projeto utiliza Git com organização baseada em GitFlow:

- `main`: versão estável
- `develop`: integração das funcionalidades
- `feature/*`: desenvolvimento de novas funcionalidades
- `release/*`: preparação de versões
- `hotfix/*`: correções urgentes

Os commits seguem o padrão Conventional Commits.

Exemplo:

```text
feat: estrutura inicial do projeto
```

As versões seguem o padrão Semantic Versioning (SemVer).

## Deploy

O projeto será publicado na Vercel, integrada ao repositório do GitHub para permitir deploys automatizados.

## Autor

Flávio Gonçalves