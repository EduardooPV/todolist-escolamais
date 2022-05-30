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