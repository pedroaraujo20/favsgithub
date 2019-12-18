## Apresentação
- Esse aplicativo lista a página de Trending do GitHub com funções de favoritar e listar os detalhes do repositório selecionado.

![favsgit](https://user-images.githubusercontent.com/17890530/71108904-daf30680-21a2-11ea-9522-5588b62f16fb.gif)

- Em caso de download do projeto você precisará baixar as dependências(node_modules): <br>
  Necessário: Yarn ou Npm instalados.
  ```
    npm install
    yarn
  ```

- Será necessário utilizar um personal token do github e adicionar em um arquivo .env que deve ser criado na raiz do projeto. Dentro do projeto tem um exemplo: .env.example
  - Para gerar um personal token, segue o link: https://help.github.com/pt/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line 

- Foi utilizado para criação do app:
  - React Native;
  - Graphql, Apollo Client para conexão com a Api do GitHub;
  - Styled-Components para estilização dos componentes e pages;
  - React Navigation para navegação entre as pages;  
  - React-Native-Vector-Icons para a utilização de icones;
  - Reactotron;
  - Eslint/Prettier;





