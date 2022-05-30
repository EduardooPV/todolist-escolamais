import React, { ChangeEvent, useState } from "react";
import Modal from "react-modal";
import { api } from "src/services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ModalAddTodo({ isOpen, onRequestClose }: ModalProps) {
  const [titleContent, setTitleContent] = useState(() => "");

  function addNewTodo() {
    if (titleContent === "") {
      return toast.error("Por favor adicione um nome para sua nova tarefa!");
    }

    api
      .post("/todos", {
        method: "POST",
        body: {
          title: titleContent,
          completed: false,
        },
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .then(() => toast.success("Tarefa criada com sucesso!"))
      .catch((error) => {
        console.log(`Error: ${error}`);
        toast.error("Não foi possível criar a tarefa.");
      });
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
