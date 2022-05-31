import React from "react";
import { HeaderProps } from "src/types";
import { Container } from "./styles";

import { IoMdReturnLeft } from "react-icons/io";
import { useRouter } from "next/router";
import Link from "next/link";

export function Header({ title }: HeaderProps) {
  const { asPath } = useRouter();

  return (
    <Container>
      {asPath !== "/" && (
        <Link href="/" passHref>
          <a>
            <IoMdReturnLeft />
          </a>
        </Link>
      )}
      <h1>{title}</h1>
    </Container>
  );
}
