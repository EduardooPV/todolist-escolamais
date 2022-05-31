export interface TodosProps {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

export interface TodoProps {
  statusChecked?: boolean
}