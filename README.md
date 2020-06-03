<div align="center">
<img alt="Logo" title="#logo" width="300px" src=".github/logo.png"/>
<br/>
<br/>
<b>Ajude o meio ambiente. Recicle!</b>
</div>

# :pushpin: Índice

- [Sobre](#sobre)
- [Documentação](#documentacao)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)
- [Como Contribuir](#como-contribuir)
- [Licença](#license)

<a id="sobre"></a>

## :bookmark: Sobre

O **Ecoleta** é uma aplicação Web e Mobile para ajudar pessoas a encontrarem pontos de coleta para reciclagem.

Esta aplicação foi construida na trilha **Booster** da **Next Level Week** distribuida pela [Rocketseat](https://rocketseat.com.br/). A idéia de criar uma aplicação voltada ao meio ambiente surgiu da coincidência da data do curso e a data da **semana do meio ambiente**.

<a id="documentacao"></a>

## :books: Documentação

Para reforçar alguns conceitos e registrar comandos que são difíceis de se lembrar, eu fiz uma [DOCUMENTATION](DOCUMENTATION.md) para ajudar quem esta iniciando com **TypeScript**, **Node.js**, **ReactJS** e **React Native**.

<a id="tecnologias-utilizadas"></a>

## :rocket: Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)

<a id="como-usar"></a>

## :fire: Como Usar

### Pré-requisítos

- É **necessário** possuir o [Node.js](https://nodejs.org/) instalado na máquina;
- Também, é **preciso** ter um gerenciador de pacotes seja o [NPM](https://www.npmjs.com/get-npm) ou [Yarn](https://classic.yarnpkg.com/pt-BR/docs/install/);
- Por fim, é **essencial** ter o [Expo](https://expo.io/learn) instalado de forma global na máquina.

1.  Faça um clone:

```shell
$ git clone https://github.com/lucasmori/ecoleta-next-level-week.git
```

2. Executando a Aplicação:

```
# Entre na pasta server/
$ cd server/

# Instale as dependências
$ npm install

# Crie o banco de dados
$ npm run knex:migrate
$ npm run knex:seed

# Inicie a API
$ npm run dev

# Entre na pasta web/
$ cd web/

# Instale as dependências
$ npm install

# Inicie a aplicação web
$ npm run start

# Entre na pasta mobile/
$ cd mobile/

# Instale as dependências
$ npm install

# Inicie a aplicação web
$ npm run start


```

<a id="como-contribuir"></a>

## :recycle: Como contribuir?

- Faça um Fork desse repositório;
- Crie uma branch com a sua feature: `git checkout -b feature-name`;
- Commit suas mudanças: `git commit -m 'feat: My new feature'`;
- Push a sua branch: `git push origin my-feature`;
- Faça o Pull Request.

<a id="license"></a>

## :memo: License

Esse projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

<!-- Footer -->
<h4 align="center">

Feito com :heart: por <a href="https://www.linkedin.com/in/lucas-mori/" target="_blank">Lucas Mori.</a>

</h4>
