import { SetStateAction } from "react";

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface TodosProps {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

export interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  todos: TodosProps[];
  setTodos: React.Dispatch<SetStateAction<TodosProps[]>>;
}

export interface TodoProps {
  statusChecked: boolean;
}

export interface HeaderProps {
  title: string;
}
