import { SetStateAction } from "react";
import { TodosProps } from "src/types";

export interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  todos: TodosProps[];
  setTodos: React.Dispatch<SetStateAction<TodosProps[]>>;
}