import React, { ChangeEvent, useState, SetStateAction } from "react";
import Modal from "react-modal";
import { api } from "src/services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { TodosProps } from "../../types";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  todos: TodosProps[];
  setTodos: React.Dispatch<SetStateAction<TodosProps[]>>;
}

export function ModalAddTodo({
  isOpen,
  onRequestClose,
  todos,
  setTodos,
}: ModalProps) {
  const [titleContent, setTitleContent] = useState(() => "");

  const updateTodos = [...todos];

  function addNewTodo() {
    if (titleContent === "") {
      return toast.error("Por favor adicione um nome para sua nova tarefa!");
    }

    api
      .post("/todos", {
        method: "POST",
        body: {
          id: updateTodos[updateTodos.length - 1].id + 1,
          title: titleContent,
          completed: false,
          userId: updateTodos[0].userId,
        },
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        updateTodos.push(response.data.body);
        console.log(updateTodos);
      })
      .then(() => toast.success("Tarefa criada com sucesso!"))
      .catch((error) => {
        console.log(`Error: ${error}`);
        toast.error("Não foi possível criar a tarefa.");
      });

    setTodos(updateTodos);
  }

  function handleTaskName(event: ChangeEvent<HTMLInputElement>) {
    setTitleContent(event.currentTarget.value);
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <p>Adicionar uma nova tarefa</p>

      <label htmlFor="tarefa">Tarefa:</label>
      <input type="text" onChange={(event) => handleTaskName(event)} />

      <button onClick={addNewTodo}>Criar tarefa</button>
      <button onClick={onRequestClose}>Cancelar</button>

      <ToastContainer />
    </Modal>
  );
}
