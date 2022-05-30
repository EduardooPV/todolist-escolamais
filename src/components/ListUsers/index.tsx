import Link from "next/link";
import React, { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Container, Content, CardUser } from "./styles";

interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
}

export function ListUsers() {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    try {
      api.get("/users").then((response) => setUsers(response.data));
    } catch (error: any) {
      console.log(`Erro: ${error.message}`);
    }
  }, []);

  return (
    <Container>
      <h2>Usuários:</h2>
      <Content>
        {users.map((user) => (
          <Link href="/" passHref key={user.username}>
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
