import React from "react";
import Head from "next/head";
import { ListUsers } from "../components/ListUsers";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Todolist | Home</title>
        <meta name="description" content="Todolist EscolaMais" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Todolist</h1>

      <ListUsers />
    </div>
  );
}
