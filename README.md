# Jones Cabral — Portfólio

Portfólio profissional de Jones Cabral, desenvolvido como uma aplicação de página única com Vue 3, TypeScript e Vite. O conteúdo apresenta experiência, projetos, competências, formação e canais profissionais de contato.

O projeto foi preparado para publicação na raiz de `https://jctech9.github.io/` por GitHub Pages.

## Stack

- Vue 3 com Composition API e `<script setup lang="ts">`;
- TypeScript e Vite;
- CSS próprio com temas claro e escuro;
- Vitest e Vue Test Utils;
- Playwright;
- ESLint, Prettier e `vue-tsc`;
- GitHub Actions e GitHub Pages.

## Executar localmente

Requisitos: Node.js 22.12 ou mais recente e npm.

```bash
npm install
npm run dev
```

O Vite informará o endereço local no terminal.

## Verificações

```bash
npm run lint
npm run format:check
npm run typecheck
npm run test
npm run build
npm run test:e2e
```

`npm run check` executa lint, verificação de formatação, typecheck, testes unitários e build, nessa ordem.

Antes do primeiro smoke test local, instale o navegador do Playwright:

```bash
npx playwright install chromium
```

## Conteúdo dos projetos

As descrições são mantidas em `src/data/projects.ts` e não dependem da API do GitHub para renderizar. Repositórios, tecnologias, testes e recursos apresentados foram verificados nos projetos públicos correspondentes em 18 de julho de 2026. As três demonstrações públicas também responderam com HTTP 200 nessa verificação.

Ao atualizar um card, confirme o recurso diretamente no repositório antes de alterar a descrição.

## Currículo público

O botão de currículo só é incluído no build quando este arquivo existe:

```text
public/curriculo-jones-cabral.pdf
```

Antes de adicioná-lo, produza uma versão pública e sanitizada, removendo dados residenciais, números de contato e informações pessoais desnecessárias. Se o arquivo não existir, o site não cria um link de download.

## Publicação

O workflow `.github/workflows/deploy.yml` valida o projeto, executa os smoke tests e publica `dist/` no GitHub Pages em pushes para `main`. Nas configurações do repositório, a origem de Pages deve estar definida como **GitHub Actions**.

O workflow `.github/workflows/ci.yml` executa as mesmas verificações em pull requests e manualmente.

## Estrutura principal

```text
src/
├── components/
├── composables/
├── data/
├── styles/
├── types/
├── App.vue
└── main.ts
tests/
├── e2e/
└── unit/
```

## Privacidade

O portfólio não usa analytics, formulário externo, API dinâmica do GitHub, tokens ou configurações de Firebase. O contato é feito por e-mail, GitHub e LinkedIn.
