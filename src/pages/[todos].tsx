import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { api } from "src/services/api";

import { MdAdd } from "react-icons/md";
import { ModalAddTodo } from "@components/ModalAddTodo";

interface TodosProps {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

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

  function handleChangeCheck(id: number) {
    const updateTodo = todos.filter((todo) => todo.id === id)[0];
    
    api
      .put(`/todos/${updateTodo.id}`, {
        method: "PUT",
        body: {
          completed: !updateTodo.completed,
          id: updateTodo.id,
          title: updateTodo.title,
          userId: updateTodo.userId,
        },
      })
      .then((response) => console.log(response))
      .catch((error: any) => console.log(`Erro: ${error.message}`));

    setCheck(!check);
  }

  return (
    <>
      <h1>Teste</h1>
      {Object.values(todos).map((todo) => (
        <div key={todo.id} style={{ margin: "20px 0" }}>
          <span>Id: {todo.id}</span>
          <p>Título: {todo.title}</p>

          <label
            htmlFor="completed"
            style={
              todo.completed
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            Status: {todo.completed ? "completo" : "pendente"}
          </label>
          <input
            type="checkbox"
            onChange={() => handleChangeCheck(todo.id)}
            defaultChecked={check}
          />

          <button>
            <MdAdd onClick={handleOpenNewTodo} />
          </button>
        </div>
      ))}

      <ModalAddTodo
        isOpen={isNewTodoModalOpen}
        onRequestClose={handleCloseNewTodo}
      />
    </>
  );
}
