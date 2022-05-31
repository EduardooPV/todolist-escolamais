import React from "react";
import Link from "next/link";

import { CardUserProps } from "./types";
import { Container } from "./styles";

export function CardUser(props: CardUserProps) {
  return (
    <Link href={`/todos?userId=${props.props.id}`} passHref>
      <Container>
        <span>Username:</span>
        <h3>{props.props.username}</h3>
        <p>{props.props.name}</p>
        <span>{props.props.email}</span>
      </Container>
    </Link>
  );
}
