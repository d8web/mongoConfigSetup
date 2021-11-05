Arquivos do módulo inicial de Node + Typescript, da estrutura MVC aplicada.

### Pré-requisitos globais:
`npm i -g nodemon typescript ts-node`

### Instalação
`npm install`

### Para rodar o projeto
`npm run start-dev`

## Testes Doc

`yarn add -D jest ts-jest @types/jest`
`npx ts-jest config:init` cria um arquivo de config inicial do jest

Adicionar no arquivo criado jest.config.js um novo parâmetro para permitir testes assíncronos
`detectOpenHandles: true`