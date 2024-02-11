import React from 'react';
import Form from "./components/Form";
import TodoList from "@/app/components/TodoList";

export default function Home() {
  async function myAction() {
    "use server";
  }
  return (
      <div>
        <Form />
        <TodoList/>
      </div>
  );
}
