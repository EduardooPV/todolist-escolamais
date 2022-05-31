import React, { ChangeEvent, useState, SetStateAction } from "react";
import Modal from "react-modal";
import { api } from "src/services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "./styles";

import { ModalProps } from "../../types";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.8)",
    backdropFilter: "blur(2px)",
  },
  content: {
    background: " #111111",
    border: "1px solid #ff4c6a",
    height: "70%",
    width: "70%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

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
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <Container>
        <p>Adicionar uma nova tarefa</p>

        <div>
          <label htmlFor="tarefa">Tarefa:</label>
          <input
            placeholder="Ex: Estudar"
            type="text"
            onChange={(event) => handleTaskName(event)}
          />

          <div>
            <button onClick={onRequestClose}>Cancelar</button>
            <button onClick={addNewTodo}>Criar tarefa</button>
          </div>
        </div>
        <ToastContainer />
      </Container>
    </Modal>
  );
}
