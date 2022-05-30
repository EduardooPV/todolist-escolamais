import Link from "next/link";
import React, { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Container, Content, CardUser } from "./styles";

import { UserProps } from "../../types";

export function ListUsers() {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    api
      .get("/users")
      .then((response) => setUsers(response.data))
      .catch((error: any) =>
        console.log(`Não foram encontrados os usuários. Erro: ${error.message}`)
      );
  }, []);

  return (
    <Container>
      <h2>Usuários:</h2>
      <Content>
        {users.map((user) => (
          <Link href={`/todos?userId=${user.id}`} passHref key={user.username}>
            <CardUser>
              <h3>{user.username}</h3>
              <p>{user.name}</p>
              <span>{user.email}</span>
            </CardUser>
          </Link>
        ))}
      </Content>
    </Container>
  );
}
