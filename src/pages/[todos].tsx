import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { api } from "src/services/api";

interface TodosProps {
  completed: boolean;
  id: string;
  title: string;
  userId: string;
}

export default function User() {
  const [todos, setTodos] = useState<TodosProps[]>([]);
  const { asPath } = useRouter();

  console.log(asPath);

  useEffect(() => {
    try {
      api.get(asPath).then((response) => setTodos(response.data));
    } catch (error: any) {
      console.log(`Erro: ${error.message}`);
    }
  }, []);

  console.log(todos);

  return (
    <>
      <h1>Teste</h1>
      {Object.values(todos).map((todo) => (
        <div key={todo.id} style={{ margin: "20px 0" }}>
          <span>{todo.id}</span>
          <p>{todo.title}</p>
          <span>{todo.completed ? "completo" : "incompleto"}</span>
        </div>
      ))}
    </>
  );
}

// export const getStaticProps: GetStaticProps = async ({ params }: any) => {
//   const { slug } = params;

//   return {
//     props: {
//       slug,
//     },
//   };
// };
