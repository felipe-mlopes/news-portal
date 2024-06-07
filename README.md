# News Portal

## Descrição

Desafio técnico criado pela Tech Pro Bem, uma comunidade que conecta ONGs e projetos sociais com profissionais voluntários da área de tecnologia.

### O que faz

É uma aplicação de portal de notícias que consome uma API pública e exibi as notícias de maneira responsiva, com boa acessibilidade e com foco na experiência do usuário. 

### Foi construído com:

- ReactJS
- NextJS
- Typescript
- Tailwind CSS

### Como foi construído:

Com um prazo curto (menos de 2 dias), fiz o mais funcional possível, então separei a aplicação em 03 partes: App, View e Models.

- App

  Por se tratar de estrutura padrão do Next.js (não se é possível mover sem quebrar rs) mative a pasta isolada. Ela contém uma página **Home** exibindo os cards de notícias, separando em três notícias destaques (ressaltando a imagem, o título e a descrição) e outra seção com as top-5 das notícias curtas mais recentes do dia (mostrando apenas o título e a hora da publicação).
  E outra página chamada **News** com 02 rotas dinâmicas. A primeira rota para as "trending news" usando apenas o `slug` como parâmetro e a segunda rota para as "category news" usando a `category` e o `slug` como parâmetro. Nessa página mostra os detalhes com as informações completas de uma notícia específica (título, descrição, conteúdo, data da publicação e autor). 

- View
  
Na parte da View estão os componentes, o ícone utilizado e a utilidade da biblioteca **Dayjs**, com foco em UI da aplicação.

- Models
  
Já no Models concentrei os consumos da API pública (data fetching), as tipagens das respostas e uma função que gere **ID** e **Slug** únicos para cada notícia (já que o JSON consumido não apresenta esses dados). Com foco na experiência do usuário, as requisições foram feitas no server side com fetch e mantendo um cache com intervalo de 03 minutos. Além disso, utilizei a biblioteca **Zod** para tratar os possíveis erros das variáveis de ambiente da aplicação.

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

## Pontos de Melhoria

- Incluir Loading nas páginas
- Ajustar a responsividade
- Melhorar a estilização
- Tratamento dos erros das requisições


