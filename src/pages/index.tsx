import React from "react";
import Head from "next/head";
import { ListUsers } from "../components/ListUsers";

import { Header } from "@components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>To-do | Home</title>
        <meta name="description" content="Todolist EscolaMais" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="to-do - Escola Mais"/>

      <ListUsers />
    </>
  );
}
