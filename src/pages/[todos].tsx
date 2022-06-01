import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { api } from "src/services/api";
import { MdAdd } from "react-icons/md";
import { ModalAddTodo } from "../components/ModalAddTodo";

import { TodosProps } from "src/types";
import { Container, Content, ListItem } from "./style";
import { Header } from "../components/Header";

export default function UserTodos() {
  const [isNewTodoModalOpen, setIsNewTodoModalOpen] = useState(false);
  const [check, setCheck] = useState(false);
  const [todos, setTodos] = useState<TodosProps[]>([]);
  const { asPath } = useRouter();

  useEffect(() => {
    try {
      api.get(asPath).then((response) => setTodos(response.data));
    } catch (error: any) {
      console.log(`Erro: ${error.message}`);
    }
  }, []);

  function handleOpenModalNewTodo() {
    setIsNewTodoModalOpen(true);
  }

  function handleCloseModalNewTodo() {
    setIsNewTodoModalOpen(false);
  }

  const updateTodos = [...todos];

  function handleChangeCheck(id: number) {
    const todoExist = updateTodos.find((todo) => todo.id !== id);

    const todoComplete = updateTodos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            completed: !todo.completed,
          }
        : todo
    );

    if (todoExist) {
      api
        .put(`/todos/${todoExist.id}`, {
          method: "PUT",
          body: {
            userId: todoExist.userId,
            title: todoExist.title,
            id: todoExist.id,
            completed: !todoExist.completed,
          },
        })
        .then((response) => {
          // Aqui viria alguma lógica para adicionar ao State as alterações
          // Mas como está estático, vou deixar vazio
          // setTodos(response.data.body);
          console.log(response.data.body)
        })
        .catch((error: any) => console.log(`Erro: ${error.message}`));
    }
    setTodos(todoComplete);
    setCheck(!check);
  }

  return (
    <Container>
      <Head>
        <title>Suas tarefas | To-do</title>
      </Head>
      <Header title="Suas Tarefas" />
      <button onClick={handleOpenModalNewTodo}>
        <MdAdd color="#ff4c6a" fontSize="1.2rem" />
        Nova tarefa
      </button>
      <Content>
        {Object.values(todos).map((todo) => (
          <ListItem key={todo.id} statusChecked={todo.completed}>
            <input
              type="checkbox"
              onChange={() => handleChangeCheck(todo.id)}
              defaultChecked={todo.completed}
            />

            <div>
              <p>{todo.title}</p>

              <span>{todo.id}</span>
            </div>
          </ListItem>
        ))}
      </Content>

      <ModalAddTodo
        isOpen={isNewTodoModalOpen}
        onRequestClose={handleCloseModalNewTodo}
        todos={todos}
        setTodos={setTodos}
      />
    </Container>
  );
}
