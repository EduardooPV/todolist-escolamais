import React, { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Container, Content } from "./styles";
import { UserProps } from "../../types";
import { CardUser } from "@components/CardUser";

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
          <CardUser key={user.username} props={user} />
        ))}
      </Content>
    </Container>
  );
}
