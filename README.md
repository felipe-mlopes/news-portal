# News Portal

## Descrição

Desafio técnico criado pela Tech Pro Bem, uma comunidade que conecta ONGs e projetos sociais com profissionais voluntários da área de tecnologia.

### O que faz

É um portal de notícias...

### Foi construído com:

- ReactJS
- NextJS
- Typescript
- Tailwind CSS

### Como foi construído:

Com um prazo curto (menos de 2 dias), fiz o mais funcional possível, então separei a aplicação em 03 partes: App, View e Models.

- App

  Por se tratar de estrutura padrão do Next.js (não se é possível mover sem quebrar rs), contém uma página Home exibindo os cards de notícias, separando em três notícias destaques e outra seção com as top-5 das notícias mais recentes.
  ...

- View
  
Na parte da View estão os componentes, ícones utilizados e utilidades com biblioteca terceira (Dayjs), voltado para parte de UI da aplicação.

- Models
  
Já no Models concentrei os consumos da API pública (data fetching), as tipagens das respostas e uma função que gere ID e Slug únicos para cada notícia.

## Instalação

### Pré-requisitos:

- npm
- [News API](https://newsapi.org/)
  
### Etapas:

1. Faça o clone do repositório e no terminal navegue até a pasta
2. Instale as dependências do projeto com `npm install`
3. Acesse o [News API](https://newsapi.org/), crie um cadastro grátis e copie a API Key
4. Adicione o arquivo `.env.local` na raiz do projeto, cole sua API Key gerada e insira também a API Base URL `API_BASE_URL="https://newsapi.org/"` 
5. No terminal, rode `npm run dev` para iniciar o servidor em desenvolvimento
6. Acesse `http://localhost:3000` para ver a aplicação

## Instrução de Uso

## Pontos de Melhoria

- Loading nas páginas
- Ajustar a responsividade
- Melhor a estilização


