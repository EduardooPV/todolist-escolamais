import React, { ChangeEvent, useState } from "react";
import { api } from "src/services/api";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";

import { customStyles, Container } from "./styles";
import { ModalProps } from "./types";
import "react-toastify/dist/ReactToastify.css";

export function ModalAddTodo({
  isOpen,
  onRequestClose,
  todos,
  setTodos,
}: ModalProps) {
  const [nameTodoItem, setNameTodoItem] = useState(() => "");

  const updateTodos = [...todos];

  function createNewTodoItem() {
    if (nameTodoItem === "") {
      return toast.error("Por favor adicione um nome para sua nova tarefa!");
    }

    api
      .post("/todos", {
        method: "POST",
        body: {
          id: updateTodos[updateTodos.length - 1].id + 1,
          title: nameTodoItem,
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

  function handleTodoName(event: ChangeEvent<HTMLInputElement>) {
    setNameTodoItem(event.currentTarget.value);
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <Container>
        <button onClick={onRequestClose}>
          <img src="/x.svg" alt="" />
        </button>

        <p>Criar nova tarefa</p>

        <div>
          <label htmlFor="tarefa">Tarefa:</label>
          <input
            placeholder="Ex: Estudar"
            type="text"
            onChange={(event) => handleTodoName(event)}
          />

          <div>
            <button onClick={onRequestClose}>Cancelar</button>
            <button onClick={createNewTodoItem}>Criar tarefa</button>
          </div>
        </div>
        <ToastContainer />
      </Container>
    </Modal>
  );
}
