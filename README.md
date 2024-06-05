# Teste de Performance com K6

Um projeto de Teste de Performance utilizando a ferramenta K6.
Esse projeto foi elaborado no curso de Introdução aos Testes de Performance do  **Papito - QAcademy/QAninja.**

## 🚀 Tecnologias

- [k6] - ferramenta para teste de carga, performance, stress etc...

- [Node.js] - plataforma de desenvolvimento

- [Express] - framework onde a API foi construída

- [MongoDB] - Banco de dados (Não relacional)



## 👨🏻‍💻 Como executar o projeto

 
[Node.js](https://nodejs.org/) v16 ou superior para executar.

Para liberar o gerenciador de pacotes Yarn:


```

corepack enable

```  

Execute os comandos abaixo para instalar das dependências do projeto:

```sh

cd  curso-k6-basico/api

yarn  install

yarn  dev

```
## Testes Aplicados

Foram executados testes funcionais e não funcionais na API.

## 🔖 Requisitos funcionais

### Cadastro  

- [X] Deve retornar os id ao cadastrar um novo usuário

- [X] Deve retornar 201 ao cadastrar um novo usuário

- [X] Deve retornar 400 ao tentar cadastrar sem email e senha

- [X] Deve retornar 400 se o email for duplicado

| campos | descrição | tipo | obrigatório |

| :----- | :------------------------------------ | :------- | :---------- |

| email | usuário identificador único | email | sim |

| password | senha do usuário | texto | sim |
  

## 🔖 Requisitos não funcionais
  

### Cadastro
  

- [X] O cadastro com sucesso deve ocorrer em até 2 segundos

- [X] Cadastros sem sucesso devem ocorrer em até 2 segundos

- [X] Deve poder cadastrar até 100 usuários simultâneos

- [X] A margem de erro no cadastro deve ser de pelo menos 1%

## Apoie este projeto

Se você quiser apoiar este projeto, deixe um ⭐.

___

