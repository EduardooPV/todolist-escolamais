import React from "react";
import Link from "next/link";

import { UserProps } from "src/types";
import { Container } from "./styles";

interface CardUserProps {
  props: {
    id: number;
    username: string;
    name: string;
    email: string;
  }
}

export function CardUser(props: CardUserProps) {

  return (
    <Link href={`/todos?userId=${props.props.id}`} passHref>
      <Container>
        <h3>{props.props.username}</h3>
        <p>{props.props.name}</p>
        <span>{props.props.email}</span>
      </Container>
    </Link>
  );
}
