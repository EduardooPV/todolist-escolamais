<p align="center">
  <img alt="Logo Escola Mais" src="https://escolamais.com/wp-content/uploads/2021/08/logo.png">
</p>

<h1 align="center">
  Todo list
</h1>

## Indices

<!--ts-->
   * [Sobre o projeto](#sobre-o-projeto)
   * [Tecnologias](#tecnologias)
   * [Como rodar o projeto](#como-executar-o-projeto)
   * [Licença](#licença)
<!--te-->

---

## 💻 Sobre o projeto

Como objetivo do projeto, era para utilizar uma api externa *(JsonPlaceholder)*, e realizar uma requisição para puxar todos os usuários *[/users](https://jsonplaceholder.typicode.com/users)* listando eles na primeira página. 
Depois disso cara usuário teria uma página individual (Utilizei páginas dinâmicas do Next.js) e listar todos os TODOs *[/todos](https://jsonplaceholder.typicode.com/todos)* filtrando por usuário *[/todos?userId=1](https://jsonplaceholder.typicode.com/todos?userId=1)*.
Na página de TODOs do usuário era preciso conter algumas funcionalidades como, marcar uma tarefa como concluida ou pendente, e adicionar novas tarefas. 

---
## 🛠 Tecnologias

- [React.js](https://pt-br.reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Modal](https://www.npmjs.com/package/react-modal)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Toastify](https://fkhadra.github.io/react-toastify/)
- [Styled components](https://www.styled-components.com/)

---

## ⚙️ Funcionalidades

Utilizando a API [JsonPlaceholder](https://jsonplaceholder.typicode.com) para criar as funcionalidades;

- [x] Listar usuários na página inícial;
- [x] TODOs do usuário (página dinâmica);
- [x] Adicionar um novo item no TODO list de um usuário específico;
- [x] Marcar uma tarefa como concluída ou pendente;

---

## 📷 Preview

![Página de inicio](https://user-images.githubusercontent.com/69824782/171318731-ecdf8a70-e5fd-4f74-9c78-c75441c91236.png)

![Página de tarefas](https://user-images.githubusercontent.com/69824782/171319154-e425ba47-cfef-4a0e-bc2d-14ff0a0a24a5.png)

![Modal para criar nova tarefa](https://user-images.githubusercontent.com/69824782/171319206-3cacb58f-f659-4046-bf35-e8ba63b2cebb.png)

---

## 🚀 Como executar o projeto

```bash
# 1. Clone o repositório
$ git clone https://github.com/EduardooPV/todolist-escolamais.git

# 2. Acesse a pasta do projeto no seu terminal/cmd
$ cd todolist-escolamais

# 3. Instale as dependências
$ yarn install

# 4. Execute a aplicação em modo de desenvolvimento
$ yarn dev

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Luiz Eduardo

---