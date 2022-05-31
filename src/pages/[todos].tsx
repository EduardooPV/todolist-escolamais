import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { api } from "src/services/api";

import { MdAdd } from "react-icons/md";
import { ModalAddTodo } from "@components/ModalAddTodo";

import { TodosProps } from "src/types";
import { Container, Content, ListItem } from "./style";
import { Header } from "@components/Header";

export default function User() {
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

  function handleOpenNewTodo() {
    setIsNewTodoModalOpen(true);
  }

  function handleCloseNewTodo() {
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
        })
        .catch((error: any) => console.log(`Erro: ${error.message}`));
    }
    setTodos(todoComplete);
    setCheck(!check);
  }

  return (
    <Container>
      <Header title="Suas Tarefas" />
      <button onClick={handleOpenNewTodo}>
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
        onRequestClose={handleCloseNewTodo}
        todos={todos}
        setTodos={setTodos}
      />
    </Container>
  );
}
